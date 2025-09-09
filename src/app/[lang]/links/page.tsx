import Website from "@/typings"
import DeFlag from "country-flag-icons/react/3x2/DE"
import UsFlag from "country-flag-icons/react/3x2/US"
import Link from "next/link"
import {
	FaCamera,
	FaGlobe,
	FaInfoCircle,
	FaInstagram,
	FaTiktok,
	FaYoutube,
} from "react-icons/fa"
import BackgroundImage from "../../../assets/images/links/DSCF7872-edited.jpg"
import Page from "../../../components/Page/Page"
import { getDictionary } from "../dictionaries"
import styles from "./page.module.scss"

export default async function Links({ params }: PageProps<"/[lang]/links">) {
	const { lang } = (await params) as { lang: Website.I18n.Language }
	const dict = await getDictionary(lang)

	const otherLanguage: Website.I18n.Language =
		lang === "de" || lang === "de-DE" ? "en" : "de"

	return (
		<Page
			className={styles.links}
			containerProps={{ className: styles.container }}
			hideNav
			hideFooter
			lang={lang}
			dictionary={dict}
			pageTitle={"Links"}
			background={BackgroundImage}
		>
			<div className={styles.table}>
				<Link className={styles.entry} href={`/${lang}/`}>
					<FaGlobe className={styles.icon} />
					<div className={styles.label}>
						{dict.pages.links.link_website}
					</div>
				</Link>
				<Link className={styles.entry} href={`/${lang}/contact`}>
					<FaCamera className={styles.icon} />
					<div className={styles.label}>
						{dict.pages.links.link_arrange_shooting}
					</div>
				</Link>
				<Link
					className={styles.entry}
					href="https://www.instagram.com/lennardfi/"
					target="_blank"
					rel="noreferrer"
				>
					<FaInstagram className={styles.icon} />
					<div className={styles.label}>Instagram</div>
				</Link>
				<Link
					className={styles.entry}
					href="https://www.tiktok.com/@lennardfi"
					target="_blank"
					rel="noreferrer"
				>
					<FaTiktok className={styles.icon} />
					<div className={styles.label}>TikTok</div>
				</Link>
				<Link
					className={styles.entry}
					href="https://www.youtube.de/@lennardfi"
					target="_blank"
					rel="noreferrer"
				>
					<FaYoutube className={styles.icon} />
					<div className={styles.label}>YouTube</div>
				</Link>
				<Link className={styles.entry} href={`/${lang}/imprint`}>
					<FaInfoCircle className={styles.icon} />
					<div className={styles.label}>
						{dict.pages.links.link_imprint}
					</div>
				</Link>
				<Link className={styles.entry} href={`/${lang}/privacy`}>
					<FaInfoCircle className={styles.icon} />
					<div className={styles.label}>
						{dict.pages.links.link_privacy}
					</div>
				</Link>
				<Link
					className={`${styles.entry} ${styles.languageSwitch}`}
					href={
						lang === "de" || lang === "de-DE"
							? "/en/links"
							: "/de/links"
					}
				>
					{lang === "de" || lang === "de-DE" ? (
						<>
							<UsFlag className={styles.icon} title="English" />
							<div className={styles.label}>English</div>
						</>
					) : (
						<>
							<DeFlag className={styles.icon} title="Deutsch" />
							<div className={styles.label}>Deutsch</div>
						</>
					)}
				</Link>
			</div>
		</Page>
	)
}
