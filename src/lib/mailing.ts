import nodemailer from "nodemailer"
import SMTPTransport from "nodemailer/lib/smtp-transport"
import Website from "../typings"
import { readRequiredEnvValueSafely } from "./env"

/**
 * The name of the configuration file
 */
const configFile = "mailing-config.json"

export const getMailConfig =
    async (): Promise<Website.Config.MailingConfig> => {
        const host = readRequiredEnvValueSafely(
            "WEBSITE_CONTACT_FORMULAR_EMAIL_HOST",
            "string",
        )
        const port = readRequiredEnvValueSafely(
            "WEBSITE_CONTACT_FORMULAR_EMAIL_PORT",
            "number",
        )
        const user = readRequiredEnvValueSafely(
            "WEBSITE_CONTACT_FORMULAR_EMAIL_USER",
            "string",
        )
        const password = readRequiredEnvValueSafely(
            "WEBSITE_CONTACT_FORMULAR_EMAIL_PASSWORD",
            "string",
        )
        const toMailAddress = readRequiredEnvValueSafely(
            "WEBSITE_CONTACT_FORMULAR_EMAIL_TOMAIL",
            "string",
        )
        const fromMailAddress = readRequiredEnvValueSafely(
            "WEBSITE_CONTACT_FORMULAR_EMAIL_FROMMAIL",
            "string",
        )

        return {
            host,
            port,
            user,
            password,
            toMailAddress,
            fromMailAddress,
        }
    }

export const createClient = (config: Website.Config.MailingConfig) => {
    const smtpTransport = new SMTPTransport({
        host: config.host,
        port: config.port,
        auth: {
            type: "login",
            user: config.user,
            pass: config.password,
        },
        secure: true,
        logger: true,
    })
    return nodemailer.createTransport(smtpTransport)
}

export const sendMail = async (
    contactName: string,
    contactMail: string,
    contactPhone: string,
    contactDescription: string,
): Promise<void> => {
    const config = await getMailConfig()
    const client = createClient(config)

    try {
        const info = await client.sendMail({
            to: config.toMailAddress,
            from: {
                address: config.fromMailAddress,
                name: "Website Kontaktformular",
            },
            subject: config.dev
                ? `Test-Mail`
                : `Foto-Anfrage per Mail von ${contactName}`,
            html: `
<style>
* {
    font-family: Raleway, "Open Sans", "Fira Code", "Fira Code VF", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
</style>
<h1>Neue ${
                config.dev ? "Test-" : ""
            }Kontaktaufnahme über das Kontaktformular:<h1>
<h2>Name</h2>
<p>${contactName}</p>
<h2>Mail</h2>
<p>${contactMail}</p>
<h2>Telefon-Nr.</h2>
<p>${contactPhone}</p>
<h2>Beschreibung</h2>
<p>${contactDescription}</p>
`,
        })

        client.close()
    } catch (err) {
        console.error("Error while sending e-mail:", err)
        throw err
    }
}
