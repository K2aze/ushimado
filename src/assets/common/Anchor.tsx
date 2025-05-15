import type { ReactNode } from "react"
import styles from './Anchor.module.scss'

interface ButtonProps{
    content?: ReactNode;
    type?: "submit" | "reset" | "button";
    style?: 'light' | 'dark';
}

const Button = ({content='Button', type= 'button', style='dark',} : ButtonProps) => {


    return(
        <button
         type={type}
         className={`${styles.btn} ${styles[`btn--${style}`]}`}

         >
            {content}
         </button>
    )
}
interface AnchorProps{
    content?: ReactNode;
    style?: 'light' | 'dark';
    active?: boolean;
}

const Anchor = ({content = 'Nav Link', style = 'light', active = false} : AnchorProps) => {
    return (
        <a 
        href="#"
        className={`${styles.anchor} ${styles[`anchor--${style}`]} ${active? styles.active : ''}`}
        >
        
            {content}
        </a>
    )
}

export {Button, Anchor}