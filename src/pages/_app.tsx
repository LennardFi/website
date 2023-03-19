import type { AppProps } from "next/app"
import { useState } from "react"
import ImageViewer from "../components/ImageViewer/ImageViewer"
import ImageViewContext from "../context/ImageViewContext/ImageViewContext"
import LocalizationContext from "../context/LocalizationContext/LocalizationContext"
import "../styles/normalize.css"

import "../styles/globals.scss"
import Website, { Maybe } from "../typings"

export default function App({ Component, pageProps }: AppProps) {
    const [language, setLanguage] = useState<Website.Base.Localization>("DE")
    const [currentImagePreview, setCurrentImagePreview] =
        useState<Maybe<Website.ImageViewer.ImageDetails>>(undefined)

    return (
        // <StrictMode>
        <LocalizationContext.Provider
            value={{
                currentLanguage: language,
                setLanguage: setLanguage,
            }}
        >
            <ImageViewContext.Provider
                value={{
                    viewImage(image) {
                        setCurrentImagePreview(image)
                    },
                }}
            >
                <Component {...pageProps} />
                {currentImagePreview !== undefined ? (
                    <ImageViewer
                        close={() => setCurrentImagePreview(undefined)}
                        label={
                            language === "DE"
                                ? currentImagePreview.label.DE
                                : currentImagePreview.label.EN
                        }
                        src={currentImagePreview.src}
                        href={currentImagePreview.href}
                    />
                ) : null}
            </ImageViewContext.Provider>
        </LocalizationContext.Provider>
        // </StrictMode>
    )
}
