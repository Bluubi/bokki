"use client";

import styles from './style.module.css'
import {OptionsHeading} from "../../../features/options/heading/heading.component.tsx";

export default function AddNote() {
    return (
        <section className={styles.wrapper}>
            <div>
            </div>
            <ul className={styles.sidenav}>
                { OptionsHeading() }

            </ul>
            <section className={styles.content} id={'content'} >
                <p contentEditable className={styles.spacing}></p>
            </section>
        </section>
    )
}
