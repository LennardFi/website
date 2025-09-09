import Img_BusinessBestImmobilien1 from "../../assets/images/portfolio/business/DSCF0639-edited.jpg"
import Img_BusinessBestImmobilien2 from "../../assets/images/portfolio/business/DSCF0680-edited.jpg"
import Img_BusinessEinfachversichert2 from "../../assets/images/portfolio/business/DSCF0929-edited.jpg"
import Img_BusinessEinfachversichert1 from "../../assets/images/portfolio/business/DSCF0997-edited.jpg"
import Img_Seagull from "../../assets/images/portfolio/nature/DSCF3307-edited.jpg"
import Img_RedPanda3 from "../../assets/images/portfolio/nature/DSCF4366-edited.jpg"
import Img_RedPanda2 from "../../assets/images/portfolio/nature/DSCF4508-edited.jpg"
import Img_RedPanda1 from "../../assets/images/portfolio/nature/DSCF4738-edited.jpg"
import Img_CuteDog from "../../assets/images/portfolio/pets/DSCF6596-edited.jpg"
import Img_DogInCity from "../../assets/images/portfolio/pets/DSCF7658-edited.jpg"
import Img_DogInNature from "../../assets/images/portfolio/pets/DSCF7666-edited.jpg"
import Img_DogInSnow from "../../assets/images/portfolio/pets/DSCF9569-edited.jpg"
import Img_WomanWithBlondHairAndSmoke from "../../assets/images/portfolio/portraits/DSCF1588-edited.jpg"
import Img_MarioWithCamera1 from "../../assets/images/portfolio/portraits/DSCF2101-edited.jpg"
import Img_MarioWithCamera2 from "../../assets/images/portfolio/portraits/DSCF2105-edited.jpg"
import Img_BlackWomanWithBlondHairsInMarburg from "../../assets/images/portfolio/portraits/DSCF3197-cropped.jpg"
import Img_UkraineWomanInMarburg from "../../assets/images/portfolio/portraits/DSCF3522-Instagram.jpg"
import Img_BrazilianWomanInMarburg from "../../assets/images/portfolio/portraits/DSCF7225-edited.jpg"
import Img_GuitarPlayerInMarburg from "../../assets/images/portfolio/portraits/DSCF7268-edited.jpg"
import Img_ManInMarburg from "../../assets/images/portfolio/portraits/DSCF7473-edited.jpg"
import Img_TrainInRotterdam from "../../assets/images/portfolio/street-photography/DSCF4754-edited.jpg"
import Img_CoupleInAmsterdam from "../../assets/images/portfolio/street-photography/DSCF5408-edited.jpg"
import Img_ManAtTheBeach from "../../assets/images/portfolio/street-photography/DSCF5648-edited.jpg"
import Img_OberstadtPassageInMarburg from "../../assets/images/portfolio/street-photography/DSCF6721-edited.jpg"
import Img_WeddingLookingIntoEachOtherEyes from "../../assets/images/portfolio/wedding/DSCF1932-edited.jpg"
import Img_WeddingHoldingAndLookingIntoEachOtherEyes from "../../assets/images/portfolio/wedding/DSCF1964-edited.jpg"
import Img_WeddingHoldingWifeAndKiss from "../../assets/images/portfolio/wedding/DSCF1974-edited.jpg"
import Img_WeddingKissOnTheGrass from "../../assets/images/portfolio/wedding/DSCF2184-edited.jpg"

import Website from "@/typings"
import ContentGrid from "../../components/ContentGrid/ContentGrid/ContentGrid"
import ContentGridCell from "../../components/ContentGrid/ContentGridCell/ContentGridCell"
import Page from "../../components/Page/Page"
import { getDimensionValue } from "../../lib/helpers"
import { getDictionary } from "./dictionaries"
import styles from "./page.module.scss"

export default async function HomePage({ params }: PageProps<"/[lang]">) {
	const { lang } = (await params) as { lang: Website.I18n.Language }
	const dict = await getDictionary(lang)

	return (
		<Page
			className={styles.portfolio}
			dictionary={dict}
			fullWidth
			lang={lang}
		>
			<h2>{dict.pages.home.section_portraits}</h2>
			<ContentGrid
				columns={[1, 2, 2, 3]}
				gap={2}
				style={{
					margin: "0",
				}}
			>
				<ContentGridCell
					image={Img_BlackWomanWithBlondHairsInMarburg}
					de="Bekannt aus dem TikTok-Video"
					en="Known from the TikTok-Video"
					lang={lang}
					href="https://www.tiktok.com/@lennardfi/video/7212247113214971141"
				/>
				<ContentGridCell image={Img_ManInMarburg} lang={lang} />
				<ContentGridCell
					image={Img_UkraineWomanInMarburg}
					de="Bekannt aus dem Instagram-Reel"
					en="Known from the Instagram-Reel"
					lang={lang}
					href="https://www.instagram.com/reel/Cqd8SSSjuqk/"
				/>
				<ContentGridCell
					image={Img_BrazilianWomanInMarburg}
					lang={lang}
				/>
				<ContentGridCell
					image={Img_GuitarPlayerInMarburg}
					lang={lang}
				/>
				<ContentGridCell
					image={Img_WomanWithBlondHairAndSmoke}
					lang={lang}
				/>
			</ContentGrid>
			<ContentGrid
				columns={[1, 2, 2, 2]}
				gap={2}
				style={{
					marginTop: getDimensionValue(2),
				}}
			>
				<ContentGridCell image={Img_MarioWithCamera1} lang={lang} />
				<ContentGridCell image={Img_MarioWithCamera2} lang={lang} />
			</ContentGrid>
			{
				//#endregion
			}
			{
				//#region Street photography
			}
			<h2>{dict.pages.home.section_streetPhotography}</h2>
			<ContentGrid
				columns={[1, 2, 2, 2]}
				gap={2}
				style={{
					marginTop: "0",
				}}
			>
				<ContentGridCell
					image={Img_ManAtTheBeach}
					lang={lang}
					de="Mann am Strand"
					en="Man at the beach"
				/>
				<ContentGridCell
					image={Img_CoupleInAmsterdam}
					lang={lang}
					de="Pärchen in Amsterdam"
					en="Couple in Amsterdam"
				/>
				<ContentGridCell
					image={Img_TrainInRotterdam}
					lang={lang}
					de="Zug in Rotterdam"
					en="Train in Rotterdam"
				/>
				<ContentGridCell
					image={Img_OberstadtPassageInMarburg}
					lang={lang}
					de="Oberstadtpassage in Marburg"
					en="Upper Town Passage in Marburg"
				/>
			</ContentGrid>
			{
				//#endregion
			}
			{
				//#region Wedding
			}
			<h2>{dict.pages.home.section_wedding}</h2>
			<ContentGrid
				columns={[1, 2, 2, 2]}
				gap={2}
				style={{
					margin: "0",
				}}
			>
				<ContentGridCell
					image={Img_WeddingHoldingAndLookingIntoEachOtherEyes}
					lang={lang}
				/>
				<ContentGridCell
					image={Img_WeddingHoldingWifeAndKiss}
					lang={lang}
				/>
			</ContentGrid>
			<ContentGrid
				columns={[1, 2, 2, 2]}
				gap={2}
				style={{
					marginTop: getDimensionValue(2),
				}}
			>
				<ContentGridCell
					image={Img_WeddingLookingIntoEachOtherEyes}
					lang={lang}
				/>
				<ContentGridCell
					image={Img_WeddingKissOnTheGrass}
					lang={lang}
				/>
			</ContentGrid>
			{
				//#endregion
			}
			{
				//#region Business portraits
			}
			<h2>{dict.pages.home.section_wedding}</h2>
			<ContentGrid
				columns={[1, 2, 2, 2]}
				gap={2}
				style={{
					margin: "0",
				}}
			>
				<ContentGridCell
					image={Img_BusinessEinfachversichert1}
					de="Justin von Latuszek Finanzberatung"
					en={'Justin from "Latuszek Finanzberatung"'}
					lang={lang}
					href="https://www.instagram.com/einfachversichert_gmbh/"
				/>
				<ContentGridCell
					image={Img_BusinessEinfachversichert2}
					de="Justin von Latuszek Finanzberatung"
					en={'Justin from "Latuszek Finanzberatung"'}
					lang={lang}
					href="https://www.instagram.com/einfachversichert_gmbh/"
				/>
			</ContentGrid>
			<ContentGrid
				columns={[1, 2, 2, 2]}
				gap={2}
				style={{
					marginTop: getDimensionValue(2),
				}}
			>
				<ContentGridCell
					image={Img_BusinessBestImmobilien1}
					de="Komron Akbari von Best Immobilien Marburg"
					en={'Komron Akbari from Best Immobilien Marburg"'}
					lang={lang}
					href="https://www.best-immobilien-marburg.de/"
				/>
				<ContentGridCell
					image={Img_BusinessBestImmobilien2}
					de="Komron Akbari von Best Immobilien Marburg"
					en={'Komron Akbari from Best Immobilien Marburg"'}
					lang={lang}
					href="https://www.best-immobilien-marburg.de/"
				/>
			</ContentGrid>
			{
				//#endregion
			}
			{
				//#region Dogs
			}
			<h2>{dict.pages.home.section_dogs}</h2>
			<ContentGrid
				columns={[1, 2, 2, 2]}
				gap={2}
				style={{
					marginTop: "0",
				}}
			>
				<ContentGridCell
					image={Img_DogInCity}
					de="Hund in Marburg"
					en="Dog in Marburg"
					lang={lang}
				/>
				<ContentGridCell
					image={Img_CuteDog}
					de="Hund am Strand"
					en="Dog at the Beach"
					lang={lang}
				/>
				<ContentGridCell
					image={Img_DogInNature}
					de="Hund in der Natur"
					en="Dog in the nature"
					lang={lang}
				/>
				<ContentGridCell
					image={Img_DogInSnow}
					de="Hund im Schnee"
					en="Dog in the snow"
					lang={lang}
				/>
			</ContentGrid>
			{
				//#endregion
			}
			{
				//#region Wild animals
			}
			<h2>{dict.pages.home.section_wildAnimals}</h2>
			<ContentGrid
				columns={[1, 2, 2, 2]}
				gap={2}
				style={{
					margin: "0",
				}}
			>
				<ContentGridCell
					image={Img_Seagull}
					de="Möwe am Strand"
					en="Seagull at the beach"
					lang={lang}
				/>
				<ContentGridCell
					image={Img_RedPanda2}
					de="Kleiner Panda im Karlsruher Zoo"
					en="Red panda in zoo in Karlsruhe, Germany"
					lang={lang}
				/>
			</ContentGrid>
			<ContentGrid
				columns={[1, 2, 2, 2]}
				gap={2}
				style={{
					marginTop: getDimensionValue(2),
				}}
			>
				<ContentGridCell
					image={Img_RedPanda1}
					de="Kleiner Panda im Karlsruher Zoo"
					en="Red panda in zoo in Karlsruhe, Germany"
					lang={lang}
				/>
				<ContentGridCell
					image={Img_RedPanda3}
					de="Kleiner Panda im Karlsruher Zoo"
					en="Red panda in zoo in Karlsruhe, Germany"
					lang={lang}
				/>
			</ContentGrid>
			{
				//#endregion
			}
		</Page>
	)
}
