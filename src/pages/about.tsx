import Image from "next/image"
import Link from "next/link"
import Me from "../../content/about/DSCF7863-Rectangle.jpg"
import LocalizedLabel, {
    DE,
    EN,
} from "../components/LocalizedLabel/LocalizedLabel"
import Page from "../components/Page/Page"
import styles from "../styles/about.module.scss"

const Portfolio = () => {
    return (
        <Page
            // className={styles.portfolioPage}
            pageTitle={["Über mich", "About"]}
            showNav
        >
            <div className={styles.container}>
                <LocalizedLabel component="p">
                    <DE>
                        <h3>Hallo 👋</h3>
                        <p>
                            Schön, dass du meine Website besuchst. Ich bin
                            Lennard Fickus. 24 Jahre alt, Programmierer und
                            Hobbyfotograf.
                        </p>
                    </DE>
                    <EN>
                        <h3>Hello 👋</h3>
                    </EN>
                    <Image
                        alt="Profile picture"
                        className={styles.profilePicture}
                        src={Me.src}
                        height={400}
                        width={400}
                    />
                    <DE>
                        <p>
                            Hauptsächlich konzentriere ich mich auf die
                            Portrait- und People-Fotografie weil ich gerne
                            festhalte, wie jeder Mensch einzigartig und
                            wunderbar von Gott geschaffen wurde.
                        </p>
                        <p>
                            {" "}
                            Wenn dich meine Werke interessieren: Du kannst eine
                            Auswahl davon in meinem{" "}
                            <Link href="/portfolio">Portfolio</Link> anschauen.
                            Außerdem poste ich viele meiner Werke auf{" "}
                            <Link href="https://www.instagram.com/lennardfi/">
                                Instagram
                            </Link>
                            .
                        </p>
                    </DE>
                    <EN></EN>
                </LocalizedLabel>
            </div>
        </Page>
    )
}

export default Portfolio
