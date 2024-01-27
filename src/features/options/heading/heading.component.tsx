import styles from './style.module.css';
import {useRef, useState} from "react";

const liMap = [
    { element: <li onClick={() => addHeading('h1')} key="card-0"> h1 </li>},
    { element: <li onClick={() => addHeading('h2')} key="card-1"> h2 </li>},
    { element: <li onClick={() => addHeading('h3')} key="card-2"> h3 </li>},
    { element: <li onClick={() => addHeading('h4')} key="card-3"> h4 </li>}
]
export function OptionsHeading(){

    const [isOpen, setOpen] = useState<boolean>(false);
    const ref = useRef<HTMLUListElement>(null)

    return (
            <li className={styles.wrapper} onClick={() => setOpen(!isOpen)}> Añadir heading
                {isOpen && <ul className={`${styles.options}`} ref={ref}>
                    { liMap.map( li => li.element)}
                </ul>
                }
            </li>
    )
}

export function addHeading(tagName: string){
    const content = document.querySelector('#content') as HTMLElement;
    const tagElement = document.createElement(tagName) as HTMLElement;
    const nextParagraph = document.createElement('p') as HTMLElement;

    tagElement.contentEditable = 'true';
    nextParagraph.contentEditable = 'true';

    content.appendChild(tagElement)
    content.appendChild(nextParagraph)

    tagElement.focus();
}
