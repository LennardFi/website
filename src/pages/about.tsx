import Image from "next/image"
import Me from "../../content/about/DSCF7863-Rectangle.jpg"
import LocalizedLabel, {
    DE,
    EN,
} from "../components/LocalizedLabel/LocalizedLabel"
import Page from "../components/Page/Page"
import styles from "./about.module.scss"

const About = () => {
    return (
        <Page fullWidth pageTitle={["Über mich", "About me"]}>
            <div className={styles.container}>
                <Image
                    alt="Profile picture"
                    className={styles.profilePicture}
                    src={Me}
                    height={400}
                    width={400}
                />
                <div className={styles.maincontent}>
                    <h3 className={styles.header}>
                        <LocalizedLabel de="👋 Hallo" en="👋 Hello" />
                    </h3>
                    <p>
                        <LocalizedLabel>
                            <DE>
                                Ich bin Lennard Fickus.
                                <br />
                                24 Jahre alt, Programmierer und Hobbyfotograf.
                            </DE>
                            <EN>
                                I&apos;m Lennard Fickus
                                <br />
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
                            <EN>
                                Mainly I focus on portrait and people
                                photography. Every person is unique and
                                wonderfully created by our God and I try to
                                capture that in my pictures.
                            </EN>
                        </LocalizedLabel>
                    </p>
                    <p>
                        <LocalizedLabel>
                            <DE>
                                Wenn dich meine Werke interessieren: Viele
                                meiner Bilder sind auf{" "}
                            </DE>
                            <EN>
                                If you are interested in my works: Many of my
                                photos are on{" "}
                            </EN>
                        </LocalizedLabel>
                        <a
                            href="https://www.instagram.com/lennardfi/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <LocalizedLabel de="Instagram" en="Instagram" />
                        </a>
                        <LocalizedLabel de="." en="." />
                        {/* <Link href="https://www.instagram.com/lennardfi/">
                        </Link> */}
                    </p>
                </div>
            </div>
        </Page>
    )
}

export default About
