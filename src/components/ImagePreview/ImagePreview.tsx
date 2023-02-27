import Image, { ImageProps } from "next/image"
import { useContext } from "react"
import ImageViewContext from "../../context/ImageViewContext/ImageViewContext"
import LocalizationContext from "../../context/LocalizationContext/LocalizationContext"
import Website from "../../typings"

export interface ImagePreviewProps extends Omit<ImageProps, "alt"> {
    /**
     * Label in German
     */
    de: string
    /**
     * Label in English
     */
    en: string
    /**
     *
     */
    imageList?: Website.ImageViewer.ImageDetails[]
}

const ImagePreview = ({
    en,
    de,
    imageList,
    src,
    ...rest
}: ImagePreviewProps) => {
    const localizationContext = useContext(LocalizationContext)
    const imageViewContext = useContext(ImageViewContext)

    return (
        <Image
            alt={localizationContext.currentLanguage === "DE" ? de : en}
            height={500}
            onClick={() =>
                imageViewContext.viewImage({
                    label: {
                        DE: de,
                        EN: en,
                    },
                    src: src,
                })
            }
            src={src}
            {...rest}
        />
    )
}

export default ImagePreview
