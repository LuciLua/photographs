import Image from "next/image"
import Link from "next/link"
import styles from "./ImageContainer.module.scss"

type PropsImageContainer = {
    path: string,
    title: string,
    subtitle: string,
    primaryButtonContent?: string,
    secundaryButtonContent?: string,
    primaryButton: boolean,
    secundaryButton: boolean,
    primaryButtonPath?: string,
    secundaryButtonPath?: string
}

function ImageContainer(props: PropsImageContainer) {

    const {
        path,
        title,
        subtitle,
        primaryButtonContent,
        secundaryButtonContent,
        primaryButton,
        secundaryButton,
        primaryButtonPath,
        secundaryButtonPath } = props

    return (
        <div className={styles.imgContainer}>
            <div className={styles.infoContainer}>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <div className={styles.btnCollection}>
                    {primaryButton ?
                        <button className={styles.primary}>
                            <Link
                                href={primaryButtonPath || "/"}>
                                {primaryButtonContent}
                            </Link>
                        </button> : null}
                    {secundaryButton ?
                        <button className={styles.secundary}>
                            <Link href={secundaryButtonPath || "/"}>
                                {secundaryButtonContent}
                            </Link>
                        </button> : null}
                </div>
            </div>
            <Image
                className={styles.img}
                src={path}
                layout="fill"
                objectFit="cover"
            />
        </div>
    )
}

export default ImageContainer