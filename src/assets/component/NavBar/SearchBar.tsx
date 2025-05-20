import { useEffect, useRef, useState, type ReactNode } from "react";
import styles from './SearchBar.module.scss'
import { MagnifyingGlassIcon, CommandIcon } from "@phosphor-icons/react";
interface SearchBarProps{
    searchUI?: ReactNode;
    resultUI?: ReactNode;
}
const DefaultSearch = () => (
    <div className={styles.search_layout}>
        <label htmlFor='search' className={styles.icon}>
            <MagnifyingGlassIcon size={24}/>
        </label>
        <input
        className={styles.input}
        type="search" 
        name="search" 
        id="search" 
        placeholder="Search here"
        />
        <div className={styles.key}>
            <CommandIcon size={16}/>
            <span>+ K</span>
        </div>
    </div>
)

const DefaultResult = () => (
        <ul className={styles.list}>
            <li>Result 1</li>
            <li>Result 2</li>
            <li>Result 3</li>
            <li>Result 4</li>
            <li>Result 5</li>
        </ul>
)

const SearchBar = ({searchUI, resultUI}: SearchBarProps) => {
    const [isFocus, setIsFocus] = useState<Boolean>(false);
    const inputRef = useRef<HTMLDivElement>(null);

    const handleFocus = () => setIsFocus(true);
    
    useEffect(() => {
        const handleMouseDown = (e: MouseEvent) => {
            if (inputRef.current && !inputRef.current.contains(e.target as Node)){
                setIsFocus(false);
            };
        };
        document.addEventListener('mousedown', handleMouseDown)
        return () => {
            document.removeEventListener('mousedown', handleMouseDown)
        }
    })

    return(
        <div onFocus={handleFocus} ref={inputRef} className={styles.container}>
            {searchUI ?? <DefaultSearch />}
            <div className={styles.result_layout}>
                {isFocus && 
                    <DefaultResult />
                }    
            </div>
        </div>
            

    )
}

export default SearchBar;