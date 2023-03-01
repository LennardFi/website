import type { NextApiRequest, NextApiResponse } from "next"

// DEBUG: This variable is only used to test the web client response for error responses
const forceError = false

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // TODO: Not implemented
    if (req.method === "POST") {
        if (typeof req.body === "string") {
            try {
                const o = JSON.parse(req.body)

                if (
                    "name" in o &&
                    typeof o.name === "string" &&
                    "mail" in o &&
                    typeof o.mail === "string" &&
                    "phone" in o &&
                    typeof o.phone === "string" &&
                    "description" in o &&
                    typeof o.description === "string"
                ) {
                    return res.status(forceError ? 500 : 200).send(null)
                }
            } catch (e: unknown) {
                return res.status(500).send("Could not parse request.")
            }
        }
    }
    res.status(400)
}
