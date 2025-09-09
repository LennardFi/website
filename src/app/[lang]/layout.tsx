"use client"

import ImageViewContext from "@/context/ImageViewContext/ImageViewContext"
import Website, { Maybe } from "@/typings"
import { usePathname } from "next/navigation"
import { useCallback, useEffect, useState } from "react"

export default function Layout({
	children,
	params,
}: LayoutProps<"/[lang]">): React.ReactNode {
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
