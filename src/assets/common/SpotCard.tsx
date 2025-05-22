import styles from './SpotCard.module.scss';
interface SpotCardProps{
    title: string;
    image: string;
    description: string;
    tags?: string[];
}

const SpotCard = ({ title, image, description, tags }: SpotCardProps) => {
  return (
    <div className={styles.card} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.overlay}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        {tags && (
          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.tag}>#{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>  
  );
};

export default SpotCard;
