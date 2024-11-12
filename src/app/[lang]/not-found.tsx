import Page from "@/components/Page/Page"
import { getDictionary } from "./dictionaries"

export default async function NotFound() {
    const lang = "en"
    const dict = await getDictionary(lang)

    return (
        <Page dictionary={dict} lang={lang} pageTitle={"Page not found"}>
            <p>{dict.pages.notFound.notFoundLabel}</p>
        </Page>
    )
}
