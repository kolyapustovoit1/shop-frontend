import { products } from '../../data/products';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductGrid.module.css';

function ProductGrid() {
  return (
    <div>
      <div className={styles.toolbar}>
        <div className={styles.sorting}>
          <label htmlFor="sort" className={styles.sortLabel}>Сортування:</label>
          <select id="sort" className={styles.select}>
            <option value="popularity">За популярністю</option>
            <option value="price_asc">Від дешевших до дорожчих</option>
            <option value="price_desc">Від дорожчих до дешевших</option>
          </select>
        </div>
      </div>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;