import Img_BusinessBestImmobilien1 from "../../content/portfolio/business/DSCF0639-edited.jpg"
import Img_BusinessBestImmobilien2 from "../../content/portfolio/business/DSCF0680-edited.jpg"
import Img_BusinessEinfachversichert1 from "../../content/portfolio/business/DSCF0929-edited.jpg"
import Img_BusinessEinfachversichert2 from "../../content/portfolio/business/DSCF0997-edited.jpg"
import Img_Seagull from "../../content/portfolio/nature/DSCF3307-edited.jpg"
import Img_DogAtTheSea from "../../content/portfolio/pets/DSCF4577-edited.jpg"
import Img_DogInCity from "../../content/portfolio/pets/DSCF7658-edited.jpg"
import Img_DogInNature from "../../content/portfolio/pets/DSCF7666-edited.jpg"
import Img_BlackWomanInMarburg from "../../content/portfolio/portraits/DSCF7225-edited.jpg"
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
import styles from "../styles/portfolio.module.scss"

const Portfolio = () => {
    return (
        <Page
            className={styles.portfolio}
            pageTitle={["Portfolio", "Portfolio"]}
            showNav
        >
            <LocalizedLabel component="h3" de="Porträts" en="Portraits" />
            <ContentGrid
                columns={[1, 2, 3, 3]}
                gap={2}
                name="abc"
                style={{
                    marginTop: "0",
                }}
            >
                <ContentGridCell
                    image={Img_ManInMarburg}
                    label={["Mann in Marburg", "Man in Marburg"]}
                />
                <ContentGridCell
                    image={Img_BlackWomanInMarburg}
                    label={["Frau in Marburg", "Woman in Marburg"]}
                />
                <ContentGridCell image={Img_GuitarPlayerInMarburg} />
            </ContentGrid>
            <LocalizedLabel
                component="h3"
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
                <ContentGridCell image={Img_ManAtTheBeach} />
                <ContentGridCell image={Img_CoupleInAmsterdam} />
                <ContentGridCell image={Img_TrainInRotterdam} />
                <ContentGridCell image={Img_OberstadtPassageInMarburg} />
            </ContentGrid>
            <LocalizedLabel component="h3" de="Business" en="Business" />
            <ContentGrid
                columns={[1, 2, 2, 2]}
                gap={2}
                style={{ marginTop: "0" }}
            >
                <ContentGridCell image={Img_BusinessEinfachversichert2} />
                <ContentGridCell image={Img_BusinessEinfachversichert1} />
            </ContentGrid>
            <ContentGrid
                columns={[1, 2, 2, 2]}
                gap={2}
                style={{ marginTop: "0" }}
            >
                <ContentGridCell image={Img_BusinessBestImmobilien1} />
                <ContentGridCell image={Img_BusinessBestImmobilien2} />
            </ContentGrid>
            <LocalizedLabel component="h3" de="Haustiere" en="Pets" />
            <ContentGrid
                columns={[1, 2, 3, 3]}
                gap={5}
                style={{
                    marginTop: "0",
                }}
            >
                <ContentGridCell image={Img_DogInCity} />
                <ContentGridCell image={Img_DogAtTheSea} />
                <ContentGridCell image={Img_DogInNature} />
            </ContentGrid>
            <LocalizedLabel component="h3" de="Natur" en="Nature" />
            <ContentGrid
                columns={[1, 1, 1, 1]}
                gap={5}
                style={{
                    marginTop: "0",
                }}
            >
                <ContentGridCell image={Img_Seagull} />
            </ContentGrid>
        </Page>
    )
}

export default Portfolio
