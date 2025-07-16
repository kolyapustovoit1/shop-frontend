import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchDropdown from '../SearchDropdown/SearchDropdown';
import MobileMenu from '../MobileMenu/MobileMenu'; // Новий компонент
import styles from './Layout.module.css';

function Layout() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleSearch = () => {
    setIsMenuOpen(false); // Закриваємо меню, якщо відкриваємо пошук
    setIsSearchOpen(prev => !prev);
  };

  const toggleMenu = () => {
    setIsSearchOpen(false); // Закриваємо пошук, якщо відкриваємо меню
    setIsMenuOpen(prev => !prev);
  }

  return (
    <div className={styles.wrapper}>
      <Header 
        onSearchClick={toggleSearch} 
        onMenuClick={toggleMenu}
        isMenuOpen={isMenuOpen}
      />
      <SearchDropdown isOpen={isSearchOpen} onClose={toggleSearch} />
      <MobileMenu isOpen={isMenuOpen} closeMenu={toggleMenu} />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;