import { headers } from "next/headers"
import { redirect, RedirectType } from "next/navigation"

export default function RootPage() {
    const h = headers()

    redirect("/en/", RedirectType.replace)
}
