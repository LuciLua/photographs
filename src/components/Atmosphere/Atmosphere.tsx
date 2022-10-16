import Image from "next/image"
import styles from "./Atmosphere.module.scss"

function Atmosphere({ children }) {
    return (
        <div className={styles.atmosphere}>
            <img src={'/assets/particles.gif'}/>
            {children}
        </div>
    )
}

export default Atmosphere