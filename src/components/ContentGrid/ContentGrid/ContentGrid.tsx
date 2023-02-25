import { Fragment } from "react"
import useDeviceSize from "../../../hooks/useDeviceSize"
import { getDimensionValue } from "../../../lib/helpers"
import styles from "./ContentGrid.module.scss"

export interface ContentGridProps extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode
    columns: number | [number, number, number, number]
    gap?: number
    name?: string // FIXME: Only for debugging. Remove before commit
}

const ContentGrid = ({
    children,
    className,
    columns,
    gap,
    name,
    style,
    ...rest
}: ContentGridProps) => {
    const deviceSize = useDeviceSize()
    const childrenAsArray = Array.isArray(children)
        ? children
        : children !== null && children !== undefined
        ? [children]
        : []

    const numberOfColumns =
        typeof columns === "number"
            ? columns
            : deviceSize === "Small"
            ? columns[0]
            : deviceSize === "Normal"
            ? columns[1]
            : deviceSize === "Large"
            ? columns[2]
            : columns[3]

    console.log({
        name,
        numberOfColumns,
        "childrenAsArray.length": childrenAsArray.length,
        rows: childrenAsArray.length / numberOfColumns,
        columns: numberOfColumns,
    })

    return (
        <div
            className={`${styles.grid} ${className ?? ""}`}
            style={{
                gap: gap !== undefined ? getDimensionValue(gap) : undefined,
                gridTemplate: `repeat(${Math.ceil(
                    childrenAsArray.length / numberOfColumns
                )}, auto) / repeat(${numberOfColumns}, 1fr)`,
                margin: getDimensionValue(5, 0),
                ...style,
            }}
            {...rest}
        >
            {childrenAsArray.map((child, i) => (
                <Fragment key={i}>{child}</Fragment>
            ))}
        </div>
    )
}

export default ContentGrid
