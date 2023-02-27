import React, { FC, useContext } from "react"
import LocalizationContext from "../../context/LocalizationContext/LocalizationContext"
import Website from "../../typings"

export interface LocalizedLabelEntryProps {
    children?: React.ReactNode
}

export interface LocalizedLabelPropsBase {}

export interface LongLocalizedLabelProps extends LocalizedLabelPropsBase {
    children: [DE: React.ReactNode, EN: React.ReactNode]
}

export interface ShortLocalizedLabelProps extends LocalizedLabelPropsBase {
    de: string
    en: string
    component?: keyof React.ReactHTML
}

export type LocalizedLabelProps =
    | LongLocalizedLabelProps
    | ShortLocalizedLabelProps

export const LocalizedLabelEntry = (lang: Website.Base.Localization) => {
    const innerComponent: FC<LocalizedLabelEntryProps> = ({
        children,
    }: LocalizedLabelEntryProps) => {
        return <>{children}</>
    }

    innerComponent.displayName = `${lang}_LocalizedLabelEntry`
    return innerComponent
}

export const DE = LocalizedLabelEntry("DE")
export const EN = LocalizedLabelEntry("EN")

const LocalizedLabel = (props: LocalizedLabelProps) => {
    const { currentLanguage } = useContext(LocalizationContext)

    if ("children" in props) {
        return (
            <>
                {props.children.filter((child) => {
                    if (
                        typeof child === "object" &&
                        child !== null &&
                        "type" in child
                    ) {
                        switch (currentLanguage) {
                            case "DE":
                                return child.type === DE
                            case "EN":
                                return child.type === EN
                        }
                    }
                    return false
                })}
            </>
        )
    }

    if (props.component !== undefined) {
        return React.createElement(
            props.component,
            undefined,
            currentLanguage === "DE" ? props.de : props.en
        )
    }

    return <>{currentLanguage === "DE" ? props.de : props.en}</>
}

export default LocalizedLabel
