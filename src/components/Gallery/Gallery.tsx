import Image from "next/image"
import styles from "./Gallery.module.scss"

type PropsGallery = {
}

function Gallery(props: PropsGallery) {
    return (
        <div className={styles.Gallery}>
            <div className={styles.blockContainer}>
                <div className={styles.block}>
                    <Image
                        objectFit="cover"
                        src={'/photos/8.jpg'}
                        layout="fill"
                    />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, doloremque. Iste odio cum dignissimos, vel aliquid aspernatur?</p>
                </div>
                <div className={styles.block}>
                    <Image
                        objectFit="cover"
                        src={'/photos/9.jpg'}
                        layout="fill"
                    />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, delectus fugit excepturi explicabo incidunt voluptatibus minus?</p>
                </div>
                <div className={styles.block}>
                    <Image
                        objectFit="cover"
                        src={'/photos/6.jpg'}
                        layout="fill"
                    />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, delectus fugit excepturi  explicabo incidunt voluptatibus minus?</p>
                </div>
            </div>
            <div className={styles.blockContainer}>
                <div className={styles.block}>
                    <Image
                        objectFit="cover"
                        src={'/photos/7.jpg'}
                        layout="fill"
                    />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, delectus fugit excepturi  explicabo incidunt voluptatibus minus?</p>
                </div>
                <div className={styles.block}>
                    <Image
                        objectFit="cover"
                        src={'/photos/10.jpg'}
                        layout="fill"
                    />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, delectus fugit excepturi  explicabo incidunt voluptatibus minus?</p>
                </div>
            </div>


            <div className={styles.blockContainer}>
                <div className={styles.block}>
                    <Image
                        objectFit="cover"
                        src={'/photos/11.jpg'}
                        layout="fill"
                    />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, delectus fugit excepturi  explicabo incidunt voluptatibus minus?</p>
                </div>
                <div className={styles.block}>
                    <Image
                        objectFit="cover"
                        src={'/photos/12.jpg'}
                        layout="fill"
                    />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, delectus fugit excepturi  explicabo incidunt voluptatibus minus?</p>
                </div>
                <div className={styles.block}>
                    <Image
                        objectFit="cover"
                        src={'/photos/13.jpg'}
                        layout="fill"
                    />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, delectus fugit excepturi  explicabo incidunt voluptatibus minus?</p>
                </div>
            </div>
        </div>
    )
}

export default Gallery