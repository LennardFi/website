import { createContext } from "react"
import Website from "../../typings"

export interface LocalizationContext {
    lang: Website.I18n.Language
}

const LocalizationContext = createContext<LocalizationContext>({
    lang: "de",
})

export default LocalizationContext
