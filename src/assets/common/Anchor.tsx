import type { ReactNode } from "react"
import styles from './Anchor.module.scss'

interface ButtonProps{
    content?: ReactNode;
    type?: "submit" | "reset" | "button";
    style?: 'light' | 'dark';
    className?: string;
    onClick?: () => void;
}

const Button = ({content='Button', type= 'button', style='dark', className, onClick} : ButtonProps) => {


    return(
        <button
        type={type}
        className={`${styles.btn} ${styles[`btn--${style}`]} ${className}`}
        onClick={onClick}
        >
            {content}
         </button>
    )
}
interface AnchorProps{
    content?: ReactNode;
    style?: 'light' | 'dark';
    active?: boolean;
    to?: string;
}

const Anchor = ({content = 'Nav Link', style = 'light', active = false, to} : AnchorProps) => {
    return (
        <a 
        href={to? to : '#'}
        className={`${styles.anchor} ${styles[`anchor--${style}`]} ${active? styles.active : ''}`}
        >
        
            {content}
        </a>
    )
}

export {Button, Anchor}