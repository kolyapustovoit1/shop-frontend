import styles from './ShopPage.module.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import ProductGrid from '../../components/ProductGrid/ProductGrid';

function ShopPage() {
  return (
    <div className="container">
      <div className={styles.header}>
        <p className={styles.breadcrumbs}>Головна / Магазин</p>
        <h1 className={styles.title}>Магазин</h1>
      </div>
      <div className={styles.shopLayout}>
        <aside className={styles.sidebar}>
          <Sidebar />
        </aside>
        <main className={styles.mainContent}>
          <ProductGrid />
        </main>
      </div>
    </div>
  );
}

export default ShopPage;