import { createContext } from "react"
import Website from "../../typings"

interface ImageViewContext {
    viewImage(image: Website.ImageViewer.ImageDetails): void
}

const ImageViewContext = createContext<ImageViewContext>({ viewImage() {} })

export default ImageViewContext
