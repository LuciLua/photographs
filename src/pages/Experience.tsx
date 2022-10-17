import Link from "next/link"
import ImageContainer from "../components/ImageContainer/ImageContainer"
import styles from "../styles/Experience.module.scss"


function Experience() {
    return (
        <div className={styles.Experience}>
            <ImageContainer
                path="/photos/20.jpg"
                title="Experience"
                subtitle="experience  here"
                primaryButton={true}
                primaryButtonContent="Back"
                primaryButtonPath="/"
                secundaryButton={false}
                />
        </div>
    )
}

export default Experience