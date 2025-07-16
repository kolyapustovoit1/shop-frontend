import { NavLink } from 'react-router-dom';
import styles from './MobileMenu.module.css';

function MobileMenu({ isOpen, closeMenu }) {
  const getNavLinkClassName = ({ isActive }) => {
    return isActive ? `${styles.link} ${styles.activeLink}` : styles.link;
  };

  return (
    <div className={`${styles.menuContainer} ${isOpen ? styles.open : ''}`}>
      <nav className={`${styles.navMobile} container`}>
        <NavLink to="/shop" className={getNavLinkClassName} onClick={closeMenu}>Магазин</NavLink>
        <NavLink to="/buyers" className={getNavLinkClassName} onClick={closeMenu}>Покупцям</NavLink>
        <NavLink to="/blog" className={getNavLinkClassName} onClick={closeMenu}>Блог</NavLink>
        <NavLink to="/contacts" className={getNavLinkClassName} onClick={closeMenu}>Контакти</NavLink>
      </nav>
    </div>
  );
}

export default MobileMenu;