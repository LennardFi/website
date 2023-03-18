import { FormEventHandler, useContext, useEffect, useId, useState } from "react"
import LocalizedLabel, {
    DE,
    EN,
} from "../components/LocalizedLabel/LocalizedLabel"
import Page from "../components/Page/Page"
import LocalizationContext from "../context/LocalizationContext/LocalizationContext"
import useIsMounted from "../hooks/useIsMounted"
import Website, { Maybe } from "../typings"
import styles from "./contact.module.scss"

const Contact = () => {
    const isMountedRef = useIsMounted()
    const localizationContext = useContext(LocalizationContext)
    const [requestSent, setRequestSent] = useState(false)
    const [response, setResponse] = useState<Maybe<boolean>>(undefined)
    const [description, setDescription] = useState("")
    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [phone, setPhone] = useState("")
    const nameId = useId()
    const phoneId = useId()
    const mailId = useId()

    const submit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setRequestSent(true)
    }

    const resetSendButton = () => {
        setRequestSent(false)
        setResponse(undefined)
    }

    useEffect(() => {
        if (requestSent) {
            fetch("/api/contact", {
                headers: new Headers({
                    contentType: "application/json",
                }),
                method: "POST",
                body: JSON.stringify({
                    description,
                    mail,
                    name,
                    phone,
                } as Website.Api.ContactRequestBody),
            })
                .then((res) => {
                    if (isMountedRef.current) {
                        setRequestSent(false)
                        setResponse(res.status === 200 ? true : false)
                    }
                })
                .catch(() => {
                    if (isMountedRef.current) {
                        setRequestSent(false)
                        setResponse(false)
                    }
                })
                .finally(() => {
                    setTimeout(() => {
                        if (isMountedRef.current) {
                            resetSendButton()
                        }
                    }, 2000)
                })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [requestSent])

    return (
        <Page pageTitle={["Kontakt", "Contact"]}>
            <form className={styles.form} onSubmit={submit}>
                <p className={styles.info}>
                    <LocalizedLabel>
                        <DE>
                            Du möchtest ein kostenloses Shooting mit mir
                            vereinbaren? Dann bist du hier genau richtig.
                            Schreibe mir in einer Nachricht, was du dir
                            vorstellst und ich melde mich schnellst möglichst
                            bei dir.
                        </DE>
                        <EN>
                            You want to arrange a free shooting with me? Then
                            you are at the right place. Write me in a message
                            what you have in mind and I&apos;ll get back to you
                            as soon as possible.
                        </EN>
                    </LocalizedLabel>
                </p>
                <label className={styles.nameLabel} htmlFor={nameId}>
                    {localizationContext.currentLanguage === "DE"
                        ? "Name"
                        : "Name"}
                    :
                </label>
                <input
                    className={styles.nameInput}
                    id={nameId}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    value={name}
                />
                <label className={styles.mailLabel} htmlFor={mailId}>
                    {localizationContext.currentLanguage === "DE"
                        ? "E-Mail"
                        : "Mail"}
                    :
                </label>
                <input
                    className={styles.mailInput}
                    id={mailId}
                    onChange={(e) => setMail(e.target.value)}
                    type="email"
                    value={mail}
                />
                <label className={styles.phoneLabel} htmlFor={phoneId}>
                    {localizationContext.currentLanguage === "DE"
                        ? "Telefon"
                        : "Phone"}
                    :
                </label>
                <input
                    className={styles.phoneInput}
                    id={phoneId}
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel"
                    value={phone}
                />
                <textarea
                    className={styles.descriptionInput}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder={
                        localizationContext.currentLanguage === "DE"
                            ? "Schreibe mir, was du dir vorstellst..."
                            : "Let me know what you have in mind..."
                    }
                    rows={10}
                    value={description}
                />
                {response === undefined ? (
                    <button
                        className={styles.send}
                        disabled={requestSent}
                        type="submit"
                    >
                        Senden
                    </button>
                ) : response ? (
                    <p className={`${styles.responseMsg} ${styles.success}`}>
                        {localizationContext.currentLanguage === "DE"
                            ? "Anfrage versendet"
                            : "Request sent"}
                    </p>
                ) : (
                    <p className={`${styles.responseMsg} ${styles.error}`}>
                        {localizationContext.currentLanguage === "DE"
                            ? "Fehler beim Versenden der Anfrage"
                            : "Error while sending request"}
                    </p>
                )}
            </form>
        </Page>
    )
}

export default Contact
