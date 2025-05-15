import type { ReactNode } from "react"
import styles from './AnchorLink.module.scss'

type AnchorLinkProps = {
    content: ReactNode,
    to?: string,
    variant?: 'black' | 'white',
    active?: boolean,
    target?: string,

}

const AnchorLink = ({to, content, variant, active}: AnchorLinkProps) => {
    

    return(
        <a 
        href={to ? to : '#'}
        className={`${variant? styles[variant] : ''} ${active? 'styles.active' : ''} `}
        >
        {content}
        </a>
    )
}

export default AnchorLink