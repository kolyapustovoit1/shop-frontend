import styles from './SearchDropdown.module.css';
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function SearchDropdown({ isOpen, onClose }) {
  return (
    <div className={`${styles.searchOverlay} ${isOpen ? styles.open : ''}`}>
      <div className={`${styles.searchContent} container`}>
        <div className={styles.topBar}>
          <h2 className={styles.title}>Пошук</h2>
          <button onClick={onClose} className={styles.closeButton}>
            <XMarkIcon className={styles.icon} />
          </button>
        </div>
        <div className={styles.inputWrapper}>
          <input type="text" placeholder="Пошук" className={styles.searchInput} />
          <MagnifyingGlassIcon className={`${styles.icon} ${styles.inputIcon}`} />
        </div>
      </div>
    </div>
  );
}

export default SearchDropdown;