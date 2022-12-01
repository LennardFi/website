import React from "react"
import styles from "../../styles/content-grid.module.scss"
import Website from "../../typings"

interface ContentGridLineProps {
    anchor: Website.ContentGrid.ContentGridCellAnchor
    children: React.ReactNode
    title?: string
}

const ContentGridLine = ({ anchor, children, title }: ContentGridLineProps) => {
    return (
        <div
            className={styles.line}
            style={{
                // gridTemplateColumns: `repeat(${children.length}, 1fr)`,
                ...(anchor === "horizontal"
                    ? {
                          //   maxHeight: "500px",
                          //   maxWidth: "100%",
                          //   height: "min(100%, 500px)",
                          //   width: "100%",
                      }
                    : {}),
            }}
        >
            {children}
        </div>
    )
}

export default ContentGridLine
