import styles from './footer.module.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <img src="/imgs/app-food-logo.png" alt="logo AppFood" />
      <div>
        <h2>Important Links</h2>
        <div className={styles.linksContainer}>
          <Link className={styles.link} to={'/'}>Homepage</Link>
          <Link className={styles.link} to={'/plates'}>Plates</Link>
          <Link className={styles.link} to={'/profile'}>Profile</Link>
        </div>
      </div>
      <div className={styles.linksContainer}>
        Developed by Sávio Moraes.<a href="https://saviomoraes.github.io/portfolio-savio-moraes/" target='_blank' className={styles.profileLink}>See myprojects</a>
      </div>
    </footer>
  )
}
