import styles from './SpotCard.module.scss'


interface SpotCardProps{
    img: string;
    onClick?: () => void;
    title?: string;
    decs?: string;
    className?: string;
}

const SpotCard = ({img, onClick, title, decs, className}: SpotCardProps) => {
    return(
        <div
        onClick={onClick}
        className={`${styles.container} ${className}`}
        >
            <img src={img} alt={title} />
            <h4>
                {title}
            </h4>
            <p>
                {decs}
            </p>
        </div>
    )
}

export default SpotCard;