import React from "react"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Main from "../components/Main/Main"
import "../styles/globals.scss"
function App({ Component, pageProps }) {
    return (
        <React.Fragment>
            <Header />
            <Main>
                <Component {...pageProps} />
            </Main>
            <Footer />
        </React.Fragment>
    )
}

export default App