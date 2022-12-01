import type { AppProps } from "next/app"
import { useState } from "react"
import LocalizationContext from "../context/LocalizationContext"
import "../styles/globals.scss"
import Website from "../typings"

export default function App({ Component, pageProps }: AppProps) {
    const [language, setLanguage] = useState<Website.Base.Localization>("DE")

    return (
        <LocalizationContext.Provider
            value={{
                currentLanguage: language,
                setLanguage: setLanguage,
            }}
        >
            <Component {...pageProps} />
        </LocalizationContext.Provider>
    )
}
