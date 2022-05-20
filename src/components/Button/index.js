import styles from './styles.module.scss';

export function Button(props) {
    return (
        <a href={props.href} target="_blank" className={props.isFilled ? styles.filled : styles.outline}>{props.children}</a>
    )
}