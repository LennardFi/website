import Img_BusinessBestImmobilien1 from "../../content/portfolio/business/DSCF0639-edited.jpg"
import Img_BusinessBestImmobilien2 from "../../content/portfolio/business/DSCF0680-edited.jpg"
import Img_BusinessEinfachversichert2 from "../../content/portfolio/business/DSCF0929-edited.jpg"
import Img_BusinessEinfachversichert1 from "../../content/portfolio/business/DSCF0997-edited.jpg"
import Img_Seagull from "../../content/portfolio/nature/DSCF3307-edited.jpg"
import Img_RedPanda3 from "../../content/portfolio/nature/DSCF4366-edited.jpg"
import Img_RedPanda2 from "../../content/portfolio/nature/DSCF4508-edited.jpg"
import Img_RedPanda1 from "../../content/portfolio/nature/DSCF4738-edited.jpg"
import Img_DogAtTheBeach from "../../content/portfolio/pets/DSCF4577-edited.jpg"
import Img_DogInCity from "../../content/portfolio/pets/DSCF7658-edited.jpg"
import Img_DogInNature from "../../content/portfolio/pets/DSCF7666-edited.jpg"
import Img_DogInSnow from "../../content/portfolio/pets/DSCF9569-edited.jpg"
import Img_WomanWithBlondHairAndSmoke from "../../content/portfolio/portraits/DSCF1588-edited.jpg"
import Img_MarioWithCamera1 from "../../content/portfolio/portraits/DSCF2101-edited.jpg"
import Img_MarioWithCamera2 from "../../content/portfolio/portraits/DSCF2105-edited.jpg"
import Img_BlackWomanWithBlondHairsInMarburg from "../../content/portfolio/portraits/DSCF3197-cropped.jpg"
import Img_UkraineWomanInMarburg from "../../content/portfolio/portraits/DSCF3522-Instagram.jpg"
import Img_BrazilianWomanInMarburg from "../../content/portfolio/portraits/DSCF7225-edited.jpg"
import Img_GuitarPlayerInMarburg from "../../content/portfolio/portraits/DSCF7268-edited.jpg"
import Img_ManInMarburg from "../../content/portfolio/portraits/DSCF7473-edited.jpg"
import Img_TrainInRotterdam from "../../content/portfolio/street-photography/DSCF4754-edited.jpg"
import Img_CoupleInAmsterdam from "../../content/portfolio/street-photography/DSCF5408-edited.jpg"
import Img_ManAtTheBeach from "../../content/portfolio/street-photography/DSCF5648-edited.jpg"
import Img_OberstadtPassageInMarburg from "../../content/portfolio/street-photography/DSCF6721-edited.jpg"
import ContentGrid from "../components/ContentGrid/ContentGrid/ContentGrid"
import ContentGridCell from "../components/ContentGrid/ContentGridCell/ContentGridCell"
import LocalizedLabel from "../components/LocalizedLabel/LocalizedLabel"
import Page from "../components/Page/Page"
import { getDimensionValue } from "../lib/helpers"
import styles from "./index.module.scss"

const Portfolio = () => {
    return (
        <Page className={styles.portfolio} fullWidth>
            <LocalizedLabel component="h2" de="Porträts" en="Portraits" />
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
                    href="https://www.tiktok.com/@lennardfi/video/7212247113214971141"
                />
                <ContentGridCell image={Img_ManInMarburg} />
                <ContentGridCell
                    image={Img_UkraineWomanInMarburg}
                    de="Bekannt aus dem Instagram-Reel"
                    en="Known from the Instagram-Reel"
                    href="https://www.instagram.com/reel/Cqd8SSSjuqk/"
                />
                <ContentGridCell image={Img_BrazilianWomanInMarburg} />
                <ContentGridCell image={Img_GuitarPlayerInMarburg} />
                <ContentGridCell image={Img_WomanWithBlondHairAndSmoke} />
            </ContentGrid>
            <ContentGrid
                columns={[1, 2, 2, 2]}
                gap={2}
                style={{
                    marginTop: getDimensionValue(2),
                }}
            >
                <ContentGridCell image={Img_MarioWithCamera1} />
                <ContentGridCell image={Img_MarioWithCamera2} />
            </ContentGrid>
            <LocalizedLabel
                component="h2"
                de="Straßenfotografie"
                en="Street Photography"
            />
            <ContentGrid
                columns={[1, 2, 2, 2]}
                gap={2}
                style={{
                    marginTop: "0",
                }}
            >
                <ContentGridCell
                    image={Img_ManAtTheBeach}
                    de="Mann am Strand"
                    en="Man at the beach"
                />
                <ContentGridCell
                    image={Img_CoupleInAmsterdam}
                    de="Pärchen in Amsterdam"
                    en="Couple in Amsterdam"
                />
                <ContentGridCell
                    image={Img_TrainInRotterdam}
                    de="Zug in Rotterdam"
                    en="Train in Rotterdam"
                />
                <ContentGridCell
                    image={Img_OberstadtPassageInMarburg}
                    de="Oberstadtpassage in Marburg"
                    en="Upper Town Passage in Marburg"
                />
            </ContentGrid>
            <LocalizedLabel component="h2" de="Business" en="Business" />
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
                    href="https://www.instagram.com/einfachversichert_gmbh/"
                />
                <ContentGridCell
                    image={Img_BusinessEinfachversichert2}
                    de="Justin von Latuszek Finanzberatung"
                    en={'Justin from "Latuszek Finanzberatung"'}
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
                    href="https://www.best-immobilien-marburg.de/"
                />
                <ContentGridCell
                    image={Img_BusinessBestImmobilien2}
                    de="Komron Akbari von Best Immobilien Marburg"
                    en={'Komron Akbari from Best Immobilien Marburg"'}
                    href="https://www.best-immobilien-marburg.de/"
                />
            </ContentGrid>
            <LocalizedLabel component="h2" de="Hunde" en="Dogs" />
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
                />
                <ContentGridCell
                    image={Img_DogAtTheBeach}
                    de="Hund am Strand"
                    en="Dog at the Beach"
                />
                <ContentGridCell
                    image={Img_DogInNature}
                    de="Hund in der Natur"
                    en="Dog in the nature"
                />
                <ContentGridCell
                    image={Img_DogInSnow}
                    de="Hund im Schnee"
                    en="Dog in the snow"
                />
            </ContentGrid>
            <LocalizedLabel component="h2" de="Wilde Tiere" en="Wild animals" />
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
                />
                <ContentGridCell
                    image={Img_RedPanda2}
                    de="Kleiner Panda im Karlsruher Zoo"
                    en="Red panda in zoo in Karlsruhe, Germany"
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
                />
                <ContentGridCell
                    image={Img_RedPanda3}
                    de="Kleiner Panda im Karlsruher Zoo"
                    en="Red panda in zoo in Karlsruhe, Germany"
                />
            </ContentGrid>
        </Page>
    )
}

export default Portfolio
