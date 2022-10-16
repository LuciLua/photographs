import Link from "next/link"
import styles from "../styles/About.module.scss"


function About() {
    return (
        <div className={styles.container}>
            <h1>About</h1>
            <div className={styles.link}>
                <Link href={'/'}>
                    Home
                </Link>
            </div>
        </div>
    )
}

export default About