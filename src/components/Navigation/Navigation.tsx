import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useContext, useState } from "react"
import { TfiClose, TfiMenu } from "react-icons/tfi"
import LocalizationContext from "../../context/LocalizationContext/LocalizationContext"
import Logo from "../../public/vercel.svg"
import LocalizedLabel from "../LocalizedLabel/LocalizedLabel"
import styles from "./Navigation.module.scss"

export interface NavigationProps {}

const Navigation = (props: NavigationProps) => {
    const localizationContext = useContext(LocalizationContext)
    const router = useRouter()
    const [showMenu, setShowMenu] = useState(false)

    return (
        <nav className={styles.nav}>
            <Link href="/">
                <Image
                    alt="Vercel Logo"
                    className={styles.logo}
                    height={32}
                    src={Logo}
                />
            </Link>

            <button
                className={styles.menuSwitch}
                onClick={() => setShowMenu((prev) => !prev)}
            >
                {showMenu ? <TfiClose /> : <TfiMenu />}
            </button>

            <ul className={`${styles.menu} ${showMenu ? styles.show : ""}`}>
                <li className={router.asPath === "/" ? styles.currentPage : ""}>
                    <Link href="/">
                        <LocalizedLabel de="Startseite" en="Homepage" />
                    </Link>
                </li>
                <li
                    className={
                        router.asPath === "/portfolio" ? styles.currentPage : ""
                    }
                >
                    <Link href="/portfolio">
                        <LocalizedLabel de="Portfolio" en="Portfolio" />
                    </Link>
                </li>
                <li
                    className={
                        router.asPath === "/contact" ? styles.currentPage : ""
                    }
                >
                    <Link href="/contact">
                        <LocalizedLabel de="Kontakt" en="Contact" />
                    </Link>
                </li>
                <li
                    className={
                        router.asPath === "/about" ? styles.currentPage : ""
                    }
                >
                    <Link href="/about">
                        <LocalizedLabel de="Über mich" en="About me" />
                    </Link>
                </li>
                <li>
                    <button
                        onClick={() =>
                            localizationContext.setLanguage(
                                localizationContext.currentLanguage === "DE"
                                    ? "EN"
                                    : "DE"
                            )
                        }
                    >
                        {localizationContext.currentLanguage === "DE"
                            ? "🇺🇸"
                            : "🇩🇪"}
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
