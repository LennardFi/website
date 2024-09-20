import type { NextApiRequest, NextApiResponse } from "next"
import { isContactRequestBody } from "../../lib/helpers"
import { sendMail } from "../../lib/mailing"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        if (typeof req.body === "string") {
            console.log(req.body)
            try {
                const v = JSON.parse(req.body) as unknown

                if (isContactRequestBody(v)) {
                    console.log("is contact request")

                    sendMail(v.name, v.mail, v.phone, v.description)
                        .then(() => res.status(200).send(null))
                        .catch(() =>
                            res.status(400).send("Could not send mail"),
                        )

                    return
                }

                return res.status(400).send("Invalid request body")
            } catch (e: unknown) {
                return res.status(400).send("Could not parse request.")
            }
        }
    }
    res.status(400).send("Unknown error")
}
