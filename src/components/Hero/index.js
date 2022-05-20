import styles from './styles.module.scss'

export function Hero() {
    return(
        <section className={`${styles.hero} container`}>
            <h3>Desenvolvimento de marcas</h3>
            <h1>Branding<span>&</span>Web Development</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis<br/> ligula, accumsan nec cursus in, eleifend sit amet dui.</p>
            <h2> veja alguns de nossos projetos criados com carinho</h2>
        </section>
    )
}