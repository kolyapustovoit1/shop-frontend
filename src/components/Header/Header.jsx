import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { useCart } from '../../hooks/useCart'; // Імпортуємо наш кастомний хук

import {
  MagnifyingGlassIcon,
  UserIcon,
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

function Header({ onSearchClick, onMenuClick, isMenuOpen }) {
  // Отримуємо дані з контексту за допомогою нашого хука
  const { cartCount } = useCart();

  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        {/* Мобільні іконки зліва */}
        <div className={styles.mobileActionsLeft}>
          <button onClick={onMenuClick} className={styles.iconButton}>
            {isMenuOpen ? <XMarkIcon className={styles.icon}/> : <Bars3Icon className={styles.icon} />}
          </button>
          <button onClick={onSearchClick} className={styles.iconButton}>
            <MagnifyingGlassIcon className={styles.icon} />
          </button>
        </div>

        {/* Навігація для десктопу */}
        <nav className={styles.navDesktop}>
          <NavLink to="/shop" className={styles.link}>Магазин</NavLink>
          <NavLink to="/buyers" className={styles.link}>Покупцям</NavLink>
          <NavLink to="/blog" className={styles.link}>Блог</NavLink>
          <NavLink to="/contacts" className={styles.link}>Контакти</NavLink>
        </nav>

        {/* Логотип */}
        <div className={styles.logoWrapper}>
          <Link to="/" className={styles.logo}>
            Fashion
            <span className={styles.logoSubtitle}>Designer</span>
          </Link>
        </div>

        {/* Дії для десктопу */}
        <div className={styles.desktopActions}>
          <button onClick={onSearchClick} className={styles.actionButton}>
            <MagnifyingGlassIcon className={styles.icon} />
            <span className={styles.actionText}>Пошук</span>
          </button>
          <Link to="/account" className={styles.actionButton}>
            <UserIcon className={styles.icon} />
            <span className={styles.actionText}>Акаунт</span>
          </Link>
          <button className={styles.actionButton}>
            <span className={styles.actionText}>UKR</span>
          </button>
          <Link to="/cart" className={styles.actionButton}>
            <div className={styles.cartWrapper}>
              <ShoppingBagIcon className={styles.icon} />
              {cartCount > 0 && (
                <span className={styles.cartBadge}>{cartCount}</span>
              )}
            </div>
            <span className={styles.actionText}>Кошик</span>
          </Link>
        </div>

        {/* Мобільні іконки справа */}
        <div className={styles.mobileActionsRight}>
          <Link to="/account" className={styles.iconButton}><UserIcon className={styles.icon} /></Link>
          <Link to="/cart" className={styles.iconButton}>
            <div className={styles.cartWrapper}>
              <ShoppingBagIcon className={styles.icon} />
              {cartCount > 0 && (
                 <span className={styles.cartBadge}>{cartCount}</span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;