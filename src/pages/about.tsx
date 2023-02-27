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
        <Page pageTitle={["Über mich", "About me"]} showNav>
            <div className={styles.container}>
                <h3 className={styles.header}>
                    <LocalizedLabel de="Hallo 👋" en="Hello 👋" />
                </h3>
                <Image
                    alt="Profile picture"
                    className={styles.profilePicture}
                    src={Me.src}
                    height={400}
                    width={400}
                />
                <div className={styles.maincontent}>
                    <p>
                        <LocalizedLabel>
                            <DE>
                                Ich bin Lennard Fickus. 24 Jahre alt,
                                Programmierer und Hobbyfotograf.
                            </DE>
                            <EN>
                                24 years old, developer and hobby photographer
                                from Germany.
                            </EN>
                        </LocalizedLabel>
                    </p>
                    <p>
                        <LocalizedLabel>
                            <DE>
                                Hauptsächlich konzentriere ich mich auf die
                                Portrait- und People-Fotografie. Jeder Mensch
                                ist einzigartig und wunderbar von unserem Gott
                                geschaffen worden und das versuche ich in meinen
                                Bildern festzuhalten.
                            </DE>
                            <EN>{""}</EN>
                        </LocalizedLabel>
                    </p>
                    <p>
                        <LocalizedLabel>
                            <DE>
                                Wenn dich meine Werke interessieren: Du kannst
                                eine Auswahl davon in meinem{" "}
                            </DE>
                            <EN>{""}</EN>
                        </LocalizedLabel>
                        <Link href="/portfolio">
                            <LocalizedLabel de="Portfolio" en="Portfolio" />
                        </Link>
                        <LocalizedLabel>
                            <DE>
                                {" "}
                                anschauen. Außerdem poste ich viele meiner Werke
                                auf{" "}
                            </DE>
                            <EN>{""}</EN>
                        </LocalizedLabel>
                        <a
                            href="https://www.instagram.com/lennardfi/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <LocalizedLabel de="Instagram" en="Instagram" />
                        </a>
                        {/* <Link href="https://www.instagram.com/lennardfi/">
                        </Link> */}
                        <LocalizedLabel de="." en="." />
                    </p>
                </div>
            </div>
        </Page>
    )
}

export default Portfolio
