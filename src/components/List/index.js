import { Card } from '../Card'
import styles from './styles.module.scss'

export function List() {
    const projects = [
        {
            image: '/1.png',
            name: 'Espaço Kami',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis ligula, accumsan nec cursus in, eleifend sit amet dui.'
        },
        {
            image: '/2.png',
            name: 'Animal Tag',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis ligula, accumsan nec cursus in, eleifend sit amet dui.'
        },
        {
            image: '/3.png',
            name: 'Jardim Doce',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis ligula, accumsan nec cursus in, eleifend sit amet dui.'
        },
        {
            image: '/4.png',
            name: 'Clínica Gestar',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis ligula, accumsan nec cursus in, eleifend sit amet dui.'
        },
        {
            image: '/5.png',
            name: 'Unna - Centro de Especialidades',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis ligula, accumsan nec cursus in, eleifend sit amet dui.'
        },
        {
            image: '/6.png',
            name: 'Sandra Araújo',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis ligula, accumsan nec cursus in, eleifend sit amet dui.'
        },
    ]
    return(
        <section className={`${styles.grid} container`}>
            {projects.map((item) => {
                return(
                    <Card project={item}/>
                )
            })}
        </section>
    )
}