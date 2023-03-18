import Image, { ImageProps } from "next/image"
import router from "next/router"
import { useEffect } from "react"
import { TfiClose } from "react-icons/tfi"
import styles from "./ImageViewer.module.scss"

interface ImageViewerProps {
    close(): void
    label: string
    src: ImageProps["src"]
}

const ImageViewer = ({ close, label, src }: ImageViewerProps) => {
    useEffect(() => {
        router.beforePopState(({ as }) => {
            if (as !== router.asPath) {
                close()
            }
            return true
        })

        return () => {
            router.beforePopState(() => true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router])

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
                        alt={label}
                        blurDataURL={
                            typeof src === "string"
                                ? undefined
                                : "default" in src
                                ? src.default.blurDataURL
                                : src.blurDataURL
                        }
                        className={styles.image}
                        height={1500}
                        onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                        }}
                        placeholder="blur"
                        src={src}
                    />
                </div>
                <p
                    className={styles.description}
                    onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                    }}
                >
                    {label}
                </p>
            </div>
        </div>
    )
}

export default ImageViewer
