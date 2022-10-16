import Link from "next/link"
import styles from "./Header.module.scss"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

function Header() {

    function toggleMenu() {
        var menu = document.querySelector(`ul.${styles.menu}`)

        var openMenu = document.querySelector(`span.${styles.openMenu}`)
        var closeMenu = document.querySelector(`span.${styles.closeMenu}`)

        if (menu.classList.contains(`${styles.visible}`)) {
            menu.classList.remove(`${styles.visible}`)

            openMenu.classList.add(`${styles.visible}`)
            closeMenu.classList.remove(`${styles.visible}`)

        } else {
            menu.classList.add(`${styles.visible}`)

            openMenu.classList.remove(`${styles.visible}`)
            closeMenu.classList.add(`${styles.visible}`)
        }
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1>LuciLua</h1>
            </div>
            <button className={`${styles.toggleMenu} ${styles.visible}`} onClick={toggleMenu}>
                <span className={`${styles.openMenu} ${styles.visible}`}>
                    <AiOutlineMenu />
                </span>
                <span className={styles.closeMenu}>
                    <AiOutlineClose />
                </span>
            </button>
            <ul className={styles.menu}>
                <li>
                    <Link href={'/'}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href={'/'}>
                        About
                    </Link>
                </li>
                <li>
                    <Link href={'/'}>
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link href={'/'}>
                        Experience
                    </Link>
                </li>
                <li>
                    <Link href={'/'}>
                        Photos
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header