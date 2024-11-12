"use client"

import ImageViewContext from "@/context/ImageViewContext/ImageViewContext"
import Website from "@/typings"
import { StaticImageData } from "next/image"
import React, { useContext } from "react"
import Footer from "../Footer/Footer"
import ImageViewer from "../ImageViewer/ImageViewer"
import Navigation from "../Navigation/Navigation"
import styles from "./Page.module.scss"

interface PageProps extends React.HTMLProps<HTMLDivElement> {
    background?: StaticImageData
    children?: React.ReactNode
    containerProps?: React.HTMLProps<HTMLDivElement>
    dictionary: Website.I18n.Dictionary
    hideNav?: boolean
    hideFooter?: boolean
    /**
     * Disable default mechanism to limit content width to 680px.
     */
    fullWidth?: boolean
    lang: Website.I18n.Language
    pageTitle?: string
}

export default function Page({
    background,
    children,
    className,
    containerProps,
    dictionary,
    hideNav,
    hideFooter,
    fullWidth,
    lang,
    pageTitle,
    ...rest
}: PageProps) {
    const { closeImage, currentViewedImage } = useContext(ImageViewContext)

    const { className: containerClassName, ...containerRest } =
        containerProps ?? {}

    return (
        <>
            {background === undefined ? undefined : (
                // <Image
                //     alt="Page background"
                //     fill
                //     src={background}
                //     style={{
                //         objectFit: "cover",
                //     }}
                // />
                <div className={styles.background}></div>
            )}

            <div
                className={`${styles.page} ${
                    background !== undefined ? styles.withBackground : ""
                }`}
            >
                {hideNav ? undefined : (
                    <Navigation dictionary={dictionary} lang={lang} />
                )}

                <div
                    className={`${styles.container} ${
                        containerClassName ?? ""
                    }`}
                    {...containerRest}
                >
                    <main
                        className={`${fullWidth ? "" : styles.limitWidth} ${
                            className ?? ""
                        }`}
                        {...rest}
                    >
                        {pageTitle === undefined ? undefined : (
                            <h1 className={styles.title}>{pageTitle}</h1>
                        )}
                        {children}
                    </main>

                    {hideFooter ? undefined : (
                        <Footer dictionary={dictionary} lang={lang} />
                    )}
                </div>
            </div>
            {currentViewedImage !== undefined ? (
                <ImageViewer
                    close={closeImage}
                    label={
                        lang === "de"
                            ? currentViewedImage.label.de
                            : currentViewedImage.label.en
                    }
                    src={currentViewedImage.src}
                    href={currentViewedImage.href}
                />
            ) : null}
        </>
    )
}
