import Image, { StaticImageData } from "next/image"
import { useContext } from "react"
import LocalizationContext from "../context/LocalizationContext"

interface ImageViewProps {
    /**
     * Label in German
     */
    de: string
    /**
     * Label in English
     */
    en: string
    src: StaticImageData
}

const ImageView = ({ en, de, src }: ImageViewProps) => {
    const localizationContext = useContext(LocalizationContext)

    return (
        <div>
            <Image
                alt={localizationContext.currentLanguage === "DE" ? de : en}
                height={500}
                src={src}
                width={400}
            />
        </div>
    )
}

export default ImageView
