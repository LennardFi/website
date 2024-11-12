import "../styles/normalize.css"

import { Metadata } from "next"
import "../styles/globals.scss"

interface RootLayoutProps {
    children?: React.ReactNode
}

export const metadata: Metadata = {
    title: "Lennard Fickus | Fotograf",
}

export default function Layout({ children }: RootLayoutProps) {
    return (
        <html>
            <head>
                <meta title="Lennard Fickus | Fotograf" />
                <meta
                    name="google-site-verification"
                    content="FVvCo9UGFP9r1Y9HevRBMHGBhWFM9sd_8DF2zzRFGz4"
                />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </head>
            <body>{children}</body>
        </html>
    )
}
