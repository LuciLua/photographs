import Gallery from "../components/Gallery/Gallery"
import ImageContainer from "../components/ImageContainer/ImageContainer"
import styles from "../styles/Gallery.module.scss"

function GalleryPage() {
    return (
        <div className={styles.gallery}>
            <ImageContainer
                path="/photos/21.jpg"
                title="Gallery"
                subtitle="You can see my work here"
                primaryButton={true}
                primaryButtonContent="Back"
                primaryButtonPath="/"
                secundaryButton={false}
                />
            <Gallery />
        </div>
    )
}

export default GalleryPage