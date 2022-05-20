import { Button } from '../Button';
import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={`${styles.header} container`}>
            <img src='/logo.png'/>
            <div>
                <Button href="https://forms.gle/tTuLv8QSr91gPt3d9">briefing</Button>
                <Button href="https://github.com/kauanidev">meu github</Button>
                <Button href="https://api.whatsapp.com/send/?phone=554584296579&text&app_absent=0" isFilled>solicitar orçamento</Button>
            </div>
        </header>
    )
}