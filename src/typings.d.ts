declare namespace Website {
    namespace Api {
        interface ContactRequestBody {
            name: string
            mail: string
            phone: string
            description: string
        }
    }

    namespace Base {
        type Localization = "DE" | "EN"

        type DeviceSize = "small" | "normal" | "large" | "x-large"
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

    namespace ImageViewer {
        interface ImageDetails {
            label: Record<Base.Localization, string>
            src: ImageProps["src"]
        }
    }
}

export type Maybe<T> = T | undefined

export default Website
