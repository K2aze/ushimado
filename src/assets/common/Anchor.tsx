import type { ReactNode } from "react"
import styles from './Anchor.module.scss'

interface ButtonProps{
    content?: ReactNode;
    type?: "submit" | "reset" | "button";
    style?: 'light' | 'dark' | 'primary';
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
    style?: 'light' | 'dark' | 'primary';
    active?: boolean;
    to?: string;
    className?: string;
}

const Anchor = ({content = 'Nav Link', style = 'light', active = false, to, className} : AnchorProps) => {
    return (
        <a 
        href={to? to : '#'}
        className={`${styles.anchor} ${styles[`anchor--${style}`]} ${active? styles.active : ''} ${className}`}
        >
        
            {content}
        </a>
    )
}

export {Button, Anchor}