"use client"

import Website from "@/typings"
import DeFlag from "country-flag-icons/react/3x2/DE"
import UsFlag from "country-flag-icons/react/3x2/US"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { TfiClose, TfiMenu } from "react-icons/tfi"
import ProfilePicture from "../../assets/images/about/DSCF7863-Rectangle.jpg"
import styles from "./Navigation.module.scss"

export interface NavigationProps {
    dictionary: Website.I18n.Dictionary
    lang: Website.I18n.Language
}

export default function Navigation({ dictionary, lang }: NavigationProps) {
    const pathName = usePathname()
    const [showMenu, setShowMenu] = useState(false)

    const otherLanguage: Website.I18n.Language =
        lang === "de" || lang === "de-DE" ? "en" : "de"
    const switchLanguageLink = [
        "",
        otherLanguage,
        ...pathName.split("/").slice(2),
    ].join("/")

    return (
        <nav className={styles.nav}>
            <Link href={`/${lang}/`}>
                <Image
                    alt="Profile Picture"
                    className={styles.logo}
                    height={128}
                    src={ProfilePicture}
                />
            </Link>

            <button
                className={styles.menuSwitch}
                onClick={() => setShowMenu((prev) => !prev)}
                type="button"
            >
                {showMenu ? <TfiClose /> : <TfiMenu />}
            </button>

            <ul className={`${styles.menu} ${showMenu ? styles.show : ""}`}>
                <li className={pathName === "/" ? styles.currentPage : ""}>
                    <Link href={`/${lang}/`}>
                        {dictionary.navigation.portfolio}
                    </Link>
                </li>
                <li
                    className={
                        pathName === "/contact" ? styles.currentPage : ""
                    }
                >
                    <Link href={`/${lang}/contact`}>
                        {dictionary.navigation.contact}
                    </Link>
                </li>
                <li className={pathName === "/about" ? styles.currentPage : ""}>
                    <Link href={`/${lang}/about`}>
                        {dictionary.navigation.about_me}
                    </Link>
                </li>
                <li className={styles.languageSwitch}>
                    <Link href={switchLanguageLink}>
                        {otherLanguage === "de" ? (
                            <DeFlag title="Deutsch" />
                        ) : (
                            <UsFlag title="English" />
                        )}
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
