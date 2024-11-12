import Website from "@/typings"
import Link from "next/link"
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa"
import styles from "./Footer.module.scss"

interface FooterProps {
    dictionary: Website.I18n.Dictionary
    lang: Website.I18n.Language
}

const Footer = ({ dictionary, lang }: FooterProps) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <ul className={styles.links}>
                    <li>
                        <Link href={`${lang}/privacy`}>
                            {dictionary.footer.link_privacy}
                        </Link>
                    </li>
                    <li>
                        <Link href={`/${lang}/imprint`}>
                            {dictionary.footer.link_imprint}
                        </Link>
                    </li>
                </ul>
                <ul className={styles.links}>
                    <li>
                        <Link href={`/${lang}/links`}>
                            {dictionary.footer.link_links}
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
                    <li>
                        <Link
                            href="https://www.youtube.de/@lennardfi"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaYoutube />
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
