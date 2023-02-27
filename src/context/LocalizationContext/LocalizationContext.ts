import { createContext } from "react"
import Website from "../../typings"

interface LocalizationContext {
    currentLanguage: Website.Base.Localization
    setLanguage(language: Website.Base.Localization): void
}

const LocalizationContext = createContext<LocalizationContext>({
    currentLanguage: "DE",
    setLanguage() {},
})

export default LocalizationContext
