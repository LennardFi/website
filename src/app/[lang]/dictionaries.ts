import Website from "@/typings"
import "server-only"

const dictionaries: Record<
    Extract<Website.I18n.Language, "de" | "en">,
    () => Promise<Website.I18n.Dictionary>
> = {
    de: () => import("../../dictionaries/de").then((module) => module.default),
    en: () => import("../../dictionaries/en").then((module) => module.default),
}

export const getDictionary = async (lang: Website.I18n.Language) => {
    if (lang === "de" || lang === "de-DE") {
        return dictionaries.de()
    }

    return dictionaries.en()
}
