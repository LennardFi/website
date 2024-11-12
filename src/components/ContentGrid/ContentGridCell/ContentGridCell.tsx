"use client"

import Website from "@/typings"
import { StaticImageData } from "next/image"
import { CSSProperties } from "react"
import ImagePreview from "../../ImagePreview/ImagePreview"
import styles from "./ContentGridCell.module.scss"

interface ContentGridCellPropsBase {
    className?: string
    lang?: Website.I18n.Language
    style?: CSSProperties
}

export interface EmptyContentGridCellProps extends ContentGridCellPropsBase {
    empty: true
}

export interface ImageContentGridCellProps extends ContentGridCellPropsBase {
    image: StaticImageData
    lang: Website.I18n.Language
    de?: string
    en?: string
    /**
     * Renders the label in the Image Viewer as an anchor element with a
     * reference to the given URL or path.
     */
    href?: string
}

export interface TextContentGridCellProps extends ContentGridCellPropsBase {
    de: string
    en: string
    lang: Website.I18n.Language
    /**
     * Renders the label as an anchor element with a
     * reference to the given URL or path.
     */
    href?: string
}

export interface ChildrenContentGridCellProps extends ContentGridCellPropsBase {
    children: React.ReactNode
}

export type ContentGridCellProps =
    | EmptyContentGridCellProps
    | ImageContentGridCellProps
    | TextContentGridCellProps
    | ChildrenContentGridCellProps

const ContentGridCell = (props: ContentGridCellProps) => {
    if ("image" in props) {
        return (
            <ImagePreview
                className={`${styles.cell} ${props.className ?? ""}`}
                style={props.style}
                src={props.image}
                height={500}
                href={props.href}
                de={props.de ?? ""}
                en={props.en ?? ""}
                lang={props.lang}
            />
        )
    }

    if ("empty" in props) {
        return <div className={styles.cell}></div>
    }

    if ("children" in props) {
        return <div className={styles.cell}>{props.children}</div>
    }

    return (
        <div className={styles.cell}>
            {props.href === undefined ? (
                <div>
                    {props.lang === "de" || props.lang === "de-DE"
                        ? props.de
                        : props.en}
                </div>
            ) : (
                <a href={props.href}>
                    {props.lang === "de" || props.lang === "de-DE"
                        ? props.de
                        : props.en}
                </a>
            )}
        </div>
    )
}
export default ContentGridCell
