import Image, { ImageProps } from "next/image"
import { useContext } from "react"
import ImageViewContext from "../../context/ImageViewContext/ImageViewContext"
import LocalizationContext from "../../context/LocalizationContext/LocalizationContext"
import Website from "../../typings"
import styles from "./ImagePreview.module.scss"

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
     * Renders the label in the Image Viewer as an anchor element with a
     * reference to the given URL or path.
     */
    href?: string
    /**
     *
     */
    imageList?: Website.ImageViewer.ImageDetails[]
}

const ImagePreview = ({
    className,
    de,
    en,
    imageList,
    src,
    href,
    ...rest
}: ImagePreviewProps) => {
    const localizationContext = useContext(LocalizationContext)
    const imageViewContext = useContext(ImageViewContext)

    return (
        <Image
            alt={localizationContext.currentLanguage === "DE" ? de : en}
            blurDataURL={
                typeof src === "string"
                    ? undefined
                    : "default" in src
                    ? src.default.blurDataURL
                    : src.blurDataURL
            }
            className={`${styles.imagePreview} ${className ?? ""}`}
            height={500}
            onClick={() =>
                imageViewContext.viewImage({
                    label: {
                        DE: de,
                        EN: en,
                    },
                    src: src,
                    href,
                })
            }
            placeholder="blur"
            src={src}
            {...rest}
        />
    )
}

export default ImagePreview
