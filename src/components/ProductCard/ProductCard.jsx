import styles from './ProductCard.module.css';
import { useCart } from '../../hooks/useCart'; // Імпортуємо наш кастомний хук

const HeartIcon = () => (
  <svg className={styles.heartIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);


function ProductCard({ product }) {
  // Отримуємо функцію addToCart з контексту
  const { addToCart } = useCart();
  
  const formattedPrice = product.price.toLocaleString('uk-UA');

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={product.image} alt={product.name} className={styles.image} />
        <button className={styles.favoriteButton}>
          <HeartIcon />
        </button>
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.category}>{product.category}</p>
        <p className={styles.price}>{formattedPrice} ₴</p>
      </div>
      <button className={styles.addButton} onClick={handleAddToCart}>
        Додати в кошик
      </button>
    </article>
  );
}

export default ProductCard;