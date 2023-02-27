import Image from "next/image"
import Link from "next/link"
import Me from "../../content/about/DSCF7863-Rectangle.jpg"
import LocalizedLabel, {
    DE,
    EN,
} from "../components/LocalizedLabel/LocalizedLabel"
import Page from "../components/Page/Page"
import styles from "../styles/contact.module.scss"

const Contact = () => {
    return (
        <Page pageTitle={["Kontakt", "Contact"]} showNav>
            <p>
                <LocalizedLabel>
                    <DE>
                        Du möchtest ein Shooting mit mir vereinbaren? Dann bist
                        du hier genau richtig. Ich biete Shootings in den
                        Bereichen People-Fotografie (Portraits,
                        Pärchen-Shooting, Business-Portrait),
                    </DE>
                    <EN>You want to arrange a shooting with me?</EN>
                </LocalizedLabel>
            </p>
            <form></form>
            <div>
                <h3>
                    <LocalizedLabel de="Hallo 👋" en="Hello 👋" />
                </h3>
                <p>
                    <Image
                        alt="Profile picture"
                        className={styles.profilePicture}
                        src={Me.src}
                        height={400}
                        width={400}
                    />
                    <LocalizedLabel>
                        <DE>
                            Schön, dass du meine Website besuchst. Ich bin
                            Lennard Fickus. 24 Jahre alt, Programmierer und
                            Hobbyfotograf.
                        </DE>
                        <EN>
                            Thank u for your visit. I&apos;m Lennard Fickus. 24
                            years old, developer and hobby photographer from
                            Germany.
                        </EN>
                    </LocalizedLabel>
                </p>
                <p>
                    <LocalizedLabel>
                        <DE>
                            Hauptsächlich konzentriere ich mich auf die
                            Portrait- und People-Fotografie weil ich gerne
                            festhalte, wie jeder Mensch einzigartig und
                            wunderbar von Gott geschaffen wurde.
                        </DE>
                        <EN>{""}</EN>
                    </LocalizedLabel>
                </p>
                <p>
                    <LocalizedLabel>
                        <DE>
                            Wenn dich meine Werke interessieren: Du kannst eine
                            Auswahl davon in meinem{" "}
                        </DE>
                        <EN>{""}</EN>
                    </LocalizedLabel>
                    <Link href="/portfolio">
                        <LocalizedLabel de="Portfolio" en="Portfolio" />
                    </Link>
                    <LocalizedLabel>
                        <DE>
                            {" "}
                            anschauen. Außerdem poste ich viele meiner Werke auf{" "}
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
        </Page>
    )
}

export default Contact
