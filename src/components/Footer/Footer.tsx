import Link from "next/link"
import { FaInstagram, FaTiktok } from "react-icons/fa"
import LocalizedLabel from "../LocalizedLabel/LocalizedLabel"
import styles from "./Footer.module.scss"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <ul className={styles.links}>
                    <li>
                        <Link href="/privacy">
                            <LocalizedLabel
                                de="Datenschutzerklärung"
                                en="Privacy policy"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="/imprint">
                            <LocalizedLabel de="Impressum" en="Imprint" />
                        </Link>
                    </li>
                </ul>
                <ul className={styles.links}>
                    <li>
                        <Link href="/links">
                            <LocalizedLabel de="Links" en="Links" />
                        </Link>
                    </li>
                </ul>
                <hr />
                <ul className={styles.socialMedia}>
                    <li>
                        <a
                            href="https://www.instagram.com/lennardfi/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaInstagram />
                        </a>
                    </li>
                    <li>
                        <Link
                            href="https://www.tiktok.com/@lennardfi"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaTiktok />
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
