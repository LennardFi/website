"use client"

import useIsMounted from "@/hooks/useIsMounted"
import Website, { Maybe } from "@/typings"
import { FormEventHandler, useEffect, useId, useState } from "react"
import styles from "./ContactForm.module.scss"

export interface ContactFormProps {
    dict: Website.I18n.Dictionary
}

export default function ContactForm({ dict }: ContactFormProps) {
    const isMountedRef = useIsMounted()
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
        <form className={styles.form} onSubmit={submit}>
            <p className={styles.info}>
                {dict.pages.contact.text_arrangeShooting}
            </p>
            <label className={styles.nameLabel} htmlFor={nameId}>
                {dict.pages.contact.form_name}:
            </label>
            <input
                className={styles.nameInput}
                id={nameId}
                onChange={(e) => setName(e.target.value)}
                type="text"
                value={name}
            />
            <label className={styles.mailLabel} htmlFor={mailId}>
                {dict.pages.contact.form_mail}:
            </label>
            <input
                className={styles.mailInput}
                id={mailId}
                onChange={(e) => setMail(e.target.value)}
                type="email"
                value={mail}
            />
            <label className={styles.phoneLabel} htmlFor={phoneId}>
                {dict.pages.contact.form_phone}:
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
                placeholder={dict.pages.contact.form_describeIdea}
                rows={10}
                value={description}
            />
            {response === undefined ? (
                <button
                    className={styles.send}
                    disabled={requestSent}
                    type="submit"
                >
                    {dict.pages.contact.form_submitAction}
                </button>
            ) : response ? (
                <p className={`${styles.responseMsg} ${styles.success}`}>
                    {dict.pages.contact.form_requestSent}
                </p>
            ) : (
                <p className={`${styles.responseMsg} ${styles.error}`}>
                    {dict.pages.contact.form_requestError}
                </p>
            )}
        </form>
    )
}
