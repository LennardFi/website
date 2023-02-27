import { StaticImageData } from "next/image"
import { CSSProperties, useContext } from "react"
import LocalizationContext from "../../../context/LocalizationContext/LocalizationContext"
import ImagePreview from "../../ImagePreview/ImagePreview"
import styles from "./ContentGridCell.module.scss"

interface ContentGridCellPropsBase {
    className?: string
    style?: CSSProperties
}

export interface EmptyContentGridCellProps extends ContentGridCellPropsBase {
    empty: true
}

export interface ImageContentGridCellProps extends ContentGridCellPropsBase {
    image: StaticImageData
    label?: [DE: string, EN: string]
}

export interface TextContentGridCellProps extends ContentGridCellPropsBase {
    de: string
    en: string
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
    const localizationContext = useContext(LocalizationContext)

    if ("image" in props) {
        return (
            <ImagePreview
                className={`${styles.cell} ${props.className ?? ""}`}
                style={props.style}
                src={props.image}
                height={500}
                de={props.label?.[0] ?? ""}
                en={props.label?.[1] ?? ""}
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
            <div>
                {localizationContext.currentLanguage === "DE"
                    ? props.de
                    : props.en}
            </div>
        </div>
    )
}
export default ContentGridCell
