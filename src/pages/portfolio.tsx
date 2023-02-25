import Img_Seagull from "../../content/portfolio/nature/DSCF3307-edited.jpg"
import Img_DogAtTheSea from "../../content/portfolio/pets/DSCF4577-edited.jpg"
import Img_DogOnTrack from "../../content/portfolio/pets/DSCF7666-edited.jpg"
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
            className={styles.portfolioPage}
            pageTitle={["Portfolio", "Portfolio"]}
            showNav
        >
            <LocalizedLabel component="h2" de="Porträts" en="Portraits" />
            <ContentGrid
                columns={[1, 2, 3, 3]}
                gap={2}
                name="abc"
                style={{
                    marginTop: "0",
                }}
            >
                <ContentGridCell image={Img_ManInMarburg} />
                <ContentGridCell image={Img_BlackWomanInMarburg} />
                <ContentGridCell image={Img_GuitarPlayerInMarburg} />
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
                <ContentGridCell image={Img_ManAtTheBeach} />
                <ContentGridCell image={Img_CoupleInAmsterdam} />
                <ContentGridCell image={Img_TrainInRotterdam} />
                <ContentGridCell image={Img_OberstadtPassageInMarburg} />
            </ContentGrid>
            <LocalizedLabel component="h2" de="Haustiere" en="Pets" />
            <ContentGrid
                columns={[1, 2, 2, 2]}
                gap={5}
                style={{
                    marginTop: "0",
                }}
            >
                <ContentGridCell image={Img_DogOnTrack} />
                <ContentGridCell image={Img_DogAtTheSea} />
            </ContentGrid>
            <LocalizedLabel component="h2" de="Natur" en="Nature" />
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
