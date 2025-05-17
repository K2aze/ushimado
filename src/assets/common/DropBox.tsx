import { useState, type ReactNode } from "react";
import styles from './DropBox.module.scss'

interface DropBoxProps{
    parent: ReactNode;
    children: ReactNode;
}

const DropBox = ({parent, children}: DropBoxProps) => {

    const [toggle, setToogle] = useState(false)
    

    return (
        <div className={styles.pr}>
            {parent}
            <div className={styles.cr}>
                {children}
            </div>
        </div>
            
    )
}


export default DropBox