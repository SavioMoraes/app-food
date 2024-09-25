import styles from './plateCard.module.css';

export default function PlateCard({ plateData }) {
  return (
    <div className={styles.cardContainer}>
      <img src={plateData.imgUrl} />
      <div className={styles.cardContent}>
        <h3>{plateData.name}</h3>
        <h3 className={styles.price}>$ {plateData.price}</h3>
      </div>
    </div>
  );
}