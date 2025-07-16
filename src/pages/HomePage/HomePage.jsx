import styles from './HomePage.module.css'
import Button from '../../components/Button/Button'
const heroImage = '/hero-background.jpg'; 

function HomePage() {
  return (
    <div className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
      <div className={`${styles.heroContent} container`}>
        <p className={styles.heroSubtitle}>Нова колекція</p>
        <h1 className={styles.heroTitle}>Стильні образи від провідних дизайнерів</h1>
        <Button type="link" href="/shop">
          Переглянути
        </Button>
      </div>
    </div>
  );
}

export default HomePage;