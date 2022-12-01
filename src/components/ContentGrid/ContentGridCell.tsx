import Image, { StaticImageData } from "next/image"
import { useContext } from "react"
import LocalizationContext from "../../context/LocalizationContext"
import styles from "../../styles/content-grid.module.scss"

interface ContentGridCellPropsBase {}

interface EmptyContentGridCellProps extends ContentGridCellPropsBase {
    empty: true
}

interface ImageContentGridCellProps extends ContentGridCellPropsBase {
    image: StaticImageData
    label?: [DE: string, EN: string]
}

interface TextContentGridCellProps extends ContentGridCellPropsBase {
    de: string
    en: string
}

type ContentGridCellProps =
    | EmptyContentGridCellProps
    | ImageContentGridCellProps
    | TextContentGridCellProps

const ContentGridCell = (props: ContentGridCellProps) => {
    const localizationContext = useContext(LocalizationContext)

    if ("image" in props) {
        return (
            // <div
            // >
            <Image
                className={styles.cell}
                src={props.image}
                height={500}
                alt={
                    props.label !== undefined
                        ? localizationContext.currentLanguage === "DE"
                            ? props.label[0] ?? ""
                            : props.label[1] ?? ""
                        : ""
                }
            />
            // </div>
        )
    }

    if ("empty" in props) {
        return <div className={styles.cell}></div>
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
