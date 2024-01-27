import style from './nav.module.css';
import {Link} from "react-router-dom";

export default function Nav(){
    return (
        <nav className={style.wrapper}>
            <ul className={style.nav}>
                <li> Mis notas </li>
            </ul>
            <Link to={'/note'} className={style.addNote}>+</Link>
        </nav>
    )
}
