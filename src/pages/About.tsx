import Image from "next/image"
import ImageContainer from "../components/ImageContainer/ImageContainer"
import styles from "../styles/About.module.scss"


function About() {
    return (
        <div className={styles.About}>
            <ImageContainer
                path="/photos/2.jpg"
                title="About"
                subtitle="About this project"
                primaryButton={true}
                primaryButtonContent="Back"
                primaryButtonPath="/"
                secundaryButton={true}
                secundaryButtonContent="Photos"
                secundaryButtonPath="/Gallery"
            />
            <div className={styles.content}>


                <div className={styles.Iam}>
                    <Image
                        src={'/photos/22.jpg'}
                        objectFit="cover"
                        layout="fill"
                    />
                </div>
                <div className={styles.info}>

                    <h1>My photographs</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse totam maiores beatae cum? Voluptatum minima non modi saepe unde sit fuga nihil quos reprehenderit, eum quibusdam vitae cupiditate nobis at!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About