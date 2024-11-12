import Image, { ImageProps } from "next/image"
import { useContext } from "react"
import ImageViewContext from "../../context/ImageViewContext/ImageViewContext"
import Website from "../../typings"
import styles from "./ImagePreview.module.scss"

export interface ImagePreviewProps extends Omit<ImageProps, "alt"> {
    lang: Website.I18n.Language
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
    lang,
    imageList,
    src,
    href,
    ...rest
}: ImagePreviewProps) => {
    const imageViewContext = useContext(ImageViewContext)

    return (
        <Image
            alt={lang === "de" || lang === "de-DE" ? de : en}
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
                        de,
                        "de-DE": de,
                        en,
                        "en-US": en,
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
