declare namespace Website {
    namespace Base {
        type Localization = "DE" | "EN"

        type DeviceSize = "Small" | "Normal" | "Large" | "X-Large"
    }

    namespace ContentGrid {
        interface ContentGridCellBase<T extends string> {
            type: T
        }

        type EmptyContentGridCell = ContentGridCellBase<"empty">

        interface ImageContentGridCell extends ContentGridCellBase<"img"> {
            src: StaticImageData
            de?: string
            en?: string
        }

        interface TextContentGridCell extends ContentGridCellBase<"text"> {
            de: string
            en: string
            className?: string
        }

        type ContentGridCell =
            | EmptyContentGridCell
            | ImageContentGridCell
            | TextContentGridCell

        type ContentGridCellAnchor = "horizontal" | "vertical"
    }

    namespace Portfolio {
        type Genre = "street-photography" | "portrait"
    }
}

type Maybe<T> = T | undefined

export default Website
