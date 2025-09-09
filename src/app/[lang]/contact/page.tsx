import ContactForm from "@/components/ContactForm/ContactForm"
import Page from "@/components/Page/Page"
import Website from "@/typings"
import { getDictionary } from "../dictionaries"

export default async function ContactPage({
	params,
}: PageProps<"/[lang]/contact">) {
	const { lang } = (await params) as { lang: Website.I18n.Language }
	const dict = await getDictionary(lang)

	return (
		<Page
			dictionary={dict}
			lang={lang}
			pageTitle={dict.pages.contact.pageTitle}
		>
			<ContactForm dict={dict} />
		</Page>
	)
}
