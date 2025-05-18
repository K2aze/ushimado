import { useState, type ReactNode } from "react";
import styles from './DropBox.module.scss'

interface DropBoxProps{
    parent: ReactNode;
    children: ReactNode;
}

const DropBox = ({parent, children}: DropBoxProps) => {

    const [isShow, setIsShow] = useState(false);
    const clickHanddle = () => {
        setIsShow(!isShow)
    }

    return (
        <div className={styles.pr} onClick={clickHanddle}>
            {parent}
        {isShow && (
            <div className={styles.cr}>
                {children}
            </div>
        )}
        </div>
            
    )
}


export default DropBox