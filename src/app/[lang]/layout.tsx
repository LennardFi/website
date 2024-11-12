"use client"

import ImageViewContext from "@/context/ImageViewContext/ImageViewContext"
import Website, { Maybe } from "@/typings"
import { usePathname } from "next/navigation"
import { useCallback, useEffect, useState } from "react"

interface LayoutProps {
    params: { lang: Website.I18n.Language }
    children?: React.ReactNode
}

export default function Layout({ children, params: { lang } }: LayoutProps) {
    const pathName = usePathname()

    const [currentViewedImage, setCurrentViewedImage] =
        useState<Maybe<Website.ImageViewer.ImageDetails>>(undefined)

    const closeImage = useCallback(() => setCurrentViewedImage(undefined), [])
    const viewImage = useCallback(
        (image: Maybe<Website.ImageViewer.ImageDetails>) =>
            setCurrentViewedImage(image),
        [],
    )

    useEffect(() => {
        closeImage()
    }, [closeImage, pathName])

    return (
        <ImageViewContext.Provider
            value={{
                closeImage,
                currentViewedImage,
                viewImage,
            }}
        >
            {children}
        </ImageViewContext.Provider>
    )
}
