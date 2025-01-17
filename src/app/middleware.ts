import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"
import { NextRequest, NextResponse } from "next/server"

let locales = ["en", "en-US", "de", "de-DE"]

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
    let languages = new Negotiator({
        headers: [...request.headers.entries()].reduce(
            (acc, [headerName, headerValue]) => ({
                ...acc,
                [headerName]: headerValue,
            }),
            {},
        ),
    }).languages()
    let locales = ["de-DE", "en-US"]
    let defaultLocale = "de-DE"

    const locale = match(languages, locales, defaultLocale)

    console.log("getLocale", { locale })

    return locale
}

export function middleware(request: NextRequest) {
    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl

    console.log("middleware", { pathname })

    const pathnameHasLocale = locales.some(
        (locale) =>
            pathname.toLowerCase().startsWith(`/${locale.toLowerCase()}/`) ||
            pathname === `/${locale}`,
    )

    console.log("middleware", { pathnameHasLocale })

    if (pathnameHasLocale) return

    // Redirect if there is no locale
    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(request.nextUrl)
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        "/((?!_next|api).*)",
        // Optional: only run on root (/) URL
        // '/'
    ],
}
