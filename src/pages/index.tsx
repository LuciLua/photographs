import Image from "next/image"
import Link from "next/link"
import Atmosphere from "../components/Atmosphere/Atmosphere"
import styles from "../styles/Home.module.scss"

function Home() {
    return (
        <div className={styles.container}>
            <Atmosphere>

                <div className={styles.imgContainer}>
                    <div className={styles.infoContainer}>
                        <h1>
                            photographs
                        </h1>
                        <h2>Taking some pictures around the world</h2>
                        <div className={styles.btnCollection}>
                            <button>hello</button>
                            <button>Button</button>
                        </div>
                    </div>
                    <Image
                        className={styles.img}
                        src={"/photos/7.jpg"}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </Atmosphere>

            <div className={styles.link}>
                <Link href={'/About'}>
                    About
                </Link>
            </div>
            <div className={styles.galery}>
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