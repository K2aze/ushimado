import type { CSSProperties, ReactNode } from "react";
import styles from './Button.module.scss';


type ButtonProps = {

    children: ReactNode;
    onClick?: () => void;
    disable?: boolean;
    /**
     *
     *
     * @type {('primary' | 'light' | 'anchor--white' | 'anchor--black')}
     * [Option] default value is primary
     * 
     * 
     */
    variants?: 'primary' | 'light' | 'anchor--white' | 'anchor--black';
    style?: CSSProperties;
    to?: string;
}


const Button= ({children, onClick, disable, variants: variant, style, to}: ButtonProps) => {

    return (
        <button 
        type="button"
        disabled={disable}
        onClick={onClick}
        className={`${styles.btn}  ${variant ? styles[variant] : styles.primary} ${disable ? styles.disable : ''}`}
        style={style}
        >
            {children}
        </button> 
    )
}

type AnchorProps = {
        children: ReactNode;
    onClick?: () => void;
    disable?: boolean;
    /**
     *
     *
     * @type {('primary' | 'light' | 'anchor--white' | 'anchor--black')}
     * [Option] default value is primary
     * 
     * 
     */
    variants?: 'primary' | 'light' | 'anchor--white' | 'anchor--black';
    style?: CSSProperties;
    to?: string;

}

const Anchor = () =>{
    return(
        <a href="#">
            
        </a>
    )
}

export {Button}