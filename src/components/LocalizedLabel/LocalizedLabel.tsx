import React, { ReactHTML, useContext } from "react"
import LocalizationContext from "../../context/LocalizationContext"
import styles from "./LocalizedLabel.module.scss"

export interface LocalizedLabelEntryProps {
    children?: React.ReactNode
}

export interface LocalizedLabelPropsBase {
    component?: keyof ReactHTML
}

export interface ComplexLocalizedLabelProps extends LocalizedLabelPropsBase {
    children: React.ReactNode
    component?: keyof ReactHTML
}

export interface SimpleLocalizedLabelProps extends LocalizedLabelPropsBase {
    component?: keyof ReactHTML
    de: string
    en: string
}

export type LocalizedLabelProps =
    | ComplexLocalizedLabelProps
    | SimpleLocalizedLabelProps

/**
 * Localized label for german content
 */
export const DE = ({ children }: LocalizedLabelEntryProps) => {
    return <span className={`${styles.entry} ${styles.DE}`}>{children}</span>
}

/**
 * Localized label for english content
 */
export const EN = ({ children }: LocalizedLabelEntryProps) => {
    return <span className={`${styles.entry} ${styles.EN}`}>{children}</span>
}

const LocalizedLabel = (props: LocalizedLabelProps) => {
    const { currentLanguage } = useContext(LocalizationContext)

    if ("children" in props) {
        return React.createElement(
            props.component ?? "div",
            {
                className: `${styles.label} ${
                    currentLanguage === "DE" ? styles.DE : styles.EN
                }`,
            },
            props.children
        )
    }

    return React.createElement(
        props.component ?? "div",
        {
            className: `${styles.label} ${
                currentLanguage === "DE" ? styles.DE : styles.EN
            }`,
        },
        <>
            <DE>{props.de}</DE>
            <EN>{props.en}</EN>
        </>
    )
}

export default LocalizedLabel
