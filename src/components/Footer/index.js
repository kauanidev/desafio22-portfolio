import styles from './styles.module.scss'

export function Footer() {
    return(
        <footer className={`${styles.footer} container`}>
            <img src='/logo.png'/>
            <p>2022 - Artes da Kau</p>
        </footer>
    )
}