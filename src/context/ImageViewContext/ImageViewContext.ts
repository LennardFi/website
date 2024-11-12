import { createContext } from "react"
import Website, { Maybe } from "../../typings"

interface ImageViewContext {
    closeImage(): void
    currentViewedImage: Maybe<Website.ImageViewer.ImageDetails>
    viewImage(image: Website.ImageViewer.ImageDetails): void
}

const ImageViewContext = createContext<ImageViewContext>({
    closeImage() {},
    currentViewedImage: undefined,
    viewImage() {},
})

export default ImageViewContext
