import Website from "@/typings"
import Image from "next/image"
import Me from "../../../assets/images/about/DSCF7863-Rectangle.jpg"
import Page from "../../../components/Page/Page"
import { getDictionary } from "../dictionaries"
import styles from "./page.module.scss"

export default async function AboutPage({
	params,
}: PageProps<"/[lang]/about">) {
	const { lang } = (await params) as { lang: Website.I18n.Language }
	const dict = await getDictionary(lang)

	return (
		<Page
			dictionary={dict}
			fullWidth
			lang={lang}
			pageTitle={dict.pages.about.pageTitle}
		>
			<div className={styles.container}>
				<Image
					alt="Profile picture"
					className={styles.profilePicture}
					src={Me}
					height={400}
					width={400}
				/>
				<div className={styles.maincontent}>
					<h3 className={styles.header}>{dict.pages.about.hello}</h3>
					<p>
						{dict.pages.about.about_me_text_1}
						<br />
						{dict.pages.about.about_me_text_2}
					</p>
					<p>{dict.pages.about.about_me_text_3}</p>
					<p>
						{dict.pages.about.about_me_text_4}
						<a
							href="https://www.instagram.com/lennardfi/"
							rel="noreferrer"
							target="_blank"
						>
							Instagram
						</a>
						.
					</p>
				</div>
			</div>
		</Page>
	)
}
