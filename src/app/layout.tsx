import "../styles/globals.css"
import { Raleway } from "next/font/google"

const raleway = Raleway({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] })

export default function root_layout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Photographs</title>
            </head>
            <body className={raleway.className}>
                <div className="grain" />
                {children}
            </body>
        </html>
    )
}