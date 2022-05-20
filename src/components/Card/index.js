import styles from './styles.module.scss'

export function Card({ project }) {
    return(
        <div className={styles.card}>
            <img src={project.image}/>
            <div>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
            </div>
                <button>VER MAIS</button>
        </div>
    )
}