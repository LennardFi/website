import Image, { ImageProps } from "next/image"
import { TfiClose } from "react-icons/tfi"
import styles from "./ImageViewer.module.scss"

interface ImageViewerProps {
    close(): void
    src: ImageProps["src"]
    /**
     * Renders the label in the Image Viewer as an anchor element with a
     * reference to the given URL or path.
     */
    href?: string
    label?: string
}

const ImageViewer = ({ close, label, src, href }: ImageViewerProps) => {
    return (
        <div className={styles.ImageViewer}>
            <div className={styles.toolbar}>
                <button type="button" className={styles.close} onClick={close}>
                    {<TfiClose className={styles.closeImage} />}
                </button>
            </div>
            <div className={styles.container} onClick={close}>
                <div className={styles.wrapper}>
                    <Image
                        alt={label ?? ""}
                        blurDataURL={
                            typeof src === "string"
                                ? undefined
                                : "default" in src
                                ? src.default.blurDataURL
                                : src.blurDataURL
                        }
                        className={styles.image}
                        onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                        }}
                        placeholder="blur"
                        src={src}
                    />
                </div>
                {href === undefined ? (
                    <p
                        className={styles.description}
                        onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                        }}
                    >
                        {label}
                    </p>
                ) : (
                    <a
                        className={styles.description}
                        href={href}
                        onClick={(e) => {
                            e.stopPropagation()
                        }}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {label}
                    </a>
                )}
            </div>
        </div>
    )
}

export default ImageViewer
