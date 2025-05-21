import { useEffect, useRef, useState, type ReactNode } from "react";
import styles from './DropBox.module.scss';

interface DropBoxProps {
    parent: ReactNode;
    children: ReactNode;
    dropClass?: string;
}

const DropBox = ({ parent, children, dropClass }: DropBoxProps) => {
    const [isShow, setIsShow] = useState(false);
    const dropBoxRef = useRef<HTMLDivElement>(null);

    const clickHandle = () => {
        setIsShow(!isShow);
    };

    useEffect(() => {
        const outsideClick = (e: MouseEvent) => {
            if (dropBoxRef.current && !dropBoxRef.current.contains(e.target as Node)) {
                setIsShow(false);
            }
        };

        document.addEventListener('mousedown', outsideClick);
        return () => {
            document.removeEventListener('mousedown', outsideClick);
        };
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if(e.key === 'Escape'){
                setIsShow(false)
            }
        };
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    })

    return (
        <div className={styles.pr} ref={dropBoxRef}>
            <div onClick={clickHandle}>
                {parent}
            </div>
            {isShow && (
                <div className={`${styles.cr} ${dropClass}`}>
                    {children}
                </div>
            )}
        </div>
    );
};

export default DropBox;
