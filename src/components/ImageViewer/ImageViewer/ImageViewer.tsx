import Image, { ImageProps } from "next/image"
import { FaWindowClose } from "react-icons/fa"
import styles from "./ImageViewer.module.scss"

interface ImageViewerProps {
    close(): void
    label: string
    src: ImageProps["src"]
}

const ImageViewer = ({ close, label, src }: ImageViewerProps) => {
    return (
        <div className={styles.ImageViewer}>
            <header>
                <button className={styles.button} onClick={close}>
                    {<FaWindowClose />}
                </button>
            </header>
            <main>
                <Image
                    alt={label}
                    className={styles.image}
                    height={1500}
                    src={src}
                />
            </main>
            <footer>
                <div className={styles.label}>{label}</div>
            </footer>
        </div>
    )
}

export default ImageViewer
