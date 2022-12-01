import { createContext } from "react"
import Website from "../typings"

interface ContextUpdater {
    currentLanguage: Website.Base.Localization
    setLanguage(language: Website.Base.Localization): void
}

const LocalizationContext = createContext<ContextUpdater>({
    currentLanguage: "DE",
    setLanguage() {},
})

export default LocalizationContext
