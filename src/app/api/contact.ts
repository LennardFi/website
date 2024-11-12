import { NextRequest, NextResponse } from "next/server"
import { isContactRequestBody } from "../../lib/helpers"
import { sendMail } from "../../lib/mailing"

export default async function POST(req: NextRequest): Promise<NextResponse> {
    if (typeof req.body === "string") {
        try {
            const v = JSON.parse(req.body) as unknown

            if (isContactRequestBody(v)) {
                return sendMail(v.name, v.mail, v.phone, v.description)
                    .then(() => new NextResponse(null, { status: 200 }))
                    .catch(
                        () =>
                            new NextResponse("Could not send mail", {
                                status: 400,
                            }),
                    )
            }

            return new NextResponse("Invalid request body", {
                status: 400,
            })
        } catch (e: unknown) {
            return new NextResponse("Could not parse request.", {
                status: 400,
            })
        }
    }

    return new NextResponse(null, {
        status: 400,
    })
}
