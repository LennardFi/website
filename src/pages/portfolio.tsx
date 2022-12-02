import Img_Seagull from "../../content/portfolio/animals/DSCF3307-edited.jpg"
import Img_DogAtTheSea from "../../content/portfolio/animals/DSCF4577-edited.jpg"
import Img_DogOnTrack from "../../content/portfolio/animals/DSCF7666-edited.jpg"
import Img_BlackWomanInMarburg from "../../content/portfolio/portraits/DSCF7225-edited.jpg"
import Img_GuitarPlayerInMarburg from "../../content/portfolio/portraits/DSCF7268-edited.jpg"
import Img_ManInMarburg from "../../content/portfolio/portraits/DSCF7473-edited.jpg"
import Img_TrainInRotterdam from "../../content/portfolio/street-photography/DSCF4754-edited.jpg"
import Img_CoupleInAmsterdam from "../../content/portfolio/street-photography/DSCF5408-edited.jpg"
import Img_ManAtTheBeach from "../../content/portfolio/street-photography/DSCF5648-edited.jpg"
import Img_OberstadtPassageInMarburg from "../../content/portfolio/street-photography/DSCF6721-edited.jpg"
import ContentGrid from "../components/ContentGrid/ContentGrid"
import ContentGridCell from "../components/ContentGrid/ContentGridCell"
import LocalizedLabel from "../components/LocalizedLabel"
import Page from "../components/Page"
import styles from "../styles/portfolio.module.scss"

const Portfolio = () => {
    return (
        <Page
            className={styles.portfolioPage}
            pageTitle={["Portfolio", "Portfolio"]}
            showNav
        >
            <h2>
                <LocalizedLabel de="Porträts" en="Portraits" />
            </h2>
            <ContentGrid
                columns={[1, 2, 3, 3]}
                gap={2}
                style={{
                    marginTop: "0",
                }}
            >
                <ContentGridCell image={Img_ManInMarburg} />
                <ContentGridCell image={Img_BlackWomanInMarburg} />
                <ContentGridCell image={Img_GuitarPlayerInMarburg} />
            </ContentGrid>
            <h2>
                <LocalizedLabel
                    de="Straßenfotografie"
                    en="Street Photography"
                />
            </h2>
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
            <h2>
                <LocalizedLabel de="Haustiere" en="Pets" />
            </h2>
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
            <h2>
                <LocalizedLabel de="Natur" en="Nature" />
            </h2>
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
