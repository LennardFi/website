import { useContext } from "react"
import LocalizationContext from "../context/LocalizationContext"

interface LocalizedLabelProps {
    de: string
    en: string
}

const LocalizedLabel = ({ de, en }: LocalizedLabelProps) => {
    const { currentLanguage } = useContext(LocalizationContext)

    const label = currentLanguage === "DE" ? de : en

    return <>{label}</>
}

export default LocalizedLabel
