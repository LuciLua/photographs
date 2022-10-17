import Image from "next/image"
import Link from "next/link"
import ImageContainer from "../components/ImageContainer/ImageContainer"
import styles from "../styles/Home.module.scss"

function Home() {
    return (
        <div className={styles.Home}>
            <ImageContainer
                path="/photos/18.jpg"
                title="Photographs"
                subtitle="Taking some pictures around the world"
                primaryButton={true}
                secundaryButton={true}
                primaryButtonContent="Photos"
                primaryButtonPath="/Gallery"
                secundaryButtonPath="/About"
                secundaryButtonContent="About" />
            <div className={styles.link}>
                <Link href={'/About'}>
                    About
                </Link>
            </div>
            <div className={styles.gallery}>
                <div className={styles.photocard}>
                    <Image
                        className={styles.img}
                        src={`/photos/9.jpg`}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className={styles.photocard}>
                    <Image
                        className={styles.img}
                        src={`/photos/8.jpg`}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home