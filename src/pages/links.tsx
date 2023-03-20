import Link from "next/link"
import {
    FaCamera,
    FaGlobe,
    FaInstagram,
    FaTiktok,
    FaYoutube,
} from "react-icons/fa"
import BackgroundImage from "../../content/links/DSCF7872-edited.jpg"
import LocalizedLabel from "../components/LocalizedLabel/LocalizedLabel"
import Page from "../components/Page/Page"
import styles from "./links.module.scss"

export default function Links() {
    return (
        <Page
            className={styles.links}
            containerProps={{ className: styles.container }}
            hideNav
            hideFooter
            pageTitle={["Links", "Links"]}
            background={BackgroundImage}
        >
            <div className={styles.table}>
                <Link className={styles.entry} href="/">
                    <FaGlobe className={styles.icon} />
                    <div className={styles.label}>
                        <LocalizedLabel de="Website" en="Website" />
                    </div>
                </Link>
                <Link className={styles.entry} href="/contact">
                    <FaCamera className={styles.icon} />
                    <div className={styles.label}>
                        <LocalizedLabel
                            de="Kostenloses Shooting vereinbaren"
                            en="Arrange shooting"
                        />
                    </div>
                </Link>
                <Link
                    className={styles.entry}
                    href="https://www.instagram.com/lennardfi/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaInstagram className={styles.icon} />
                    <div className={styles.label}>
                        <LocalizedLabel de="Instagram" en="Instagram" />
                    </div>
                </Link>
                <Link
                    className={styles.entry}
                    href="https://www.tiktok.com/@lennardfi"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaTiktok className={styles.icon} />
                    <div className={styles.label}>
                        <LocalizedLabel de="TikTok" en="TikTok" />
                    </div>
                </Link>
                <Link
                    className={styles.entry}
                    href="https://www.youtube.de/@lennardfi"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaYoutube className={styles.icon} />
                    <div className={styles.label}>
                        <LocalizedLabel de="YouTube" en="YouTube" />
                    </div>
                </Link>
            </div>
        </Page>
    )
}
