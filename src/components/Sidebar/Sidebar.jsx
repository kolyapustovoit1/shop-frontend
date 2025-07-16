import styles from './Sidebar.module.css';

// Внутрішній компонент для групи фільтрів, щоб не повторювати код
function FilterGroup({ title, children }) {
  // Використовуємо нативний елемент <details> для простого випадаючого меню
  return (
    <details className={styles.filterGroup} open>
      <summary className={styles.filterTitle}>{title}</summary>
      <div className={styles.filterContent}>
        {children}
      </div>
    </details>
  );
}


function Sidebar() {
  return (
    <div>
      <div className={styles.categoryBlock}>
        <a href="#" className={styles.categoryLink}>Новинки</a>
        <a href="#" className={styles.categoryLink}>Бренди</a>
        <a href="#" className={styles.categoryLink}>Одяг</a>
        <a href="#" className={styles.categoryLink}>Розпродаж</a>
      </div>

      <div className={styles.filtersBlock}>
        <h3 className={styles.filtersTitle}>Фільтри</h3>
        <FilterGroup title="Ціна">
          {/* У майбутньому тут буде слайдер цін */}
          <p>Від 100 ₴ до 50 000 ₴</p>
        </FilterGroup>
        <FilterGroup title="Виробник">
          {/* У майбутньому тут буде список виробників */}
          <p>Список...</p>
        </FilterGroup>
        <FilterGroup title="Колір">
          {/* У майбутньому тут будуть зразки кольорів */}
           <p>Список...</p>
        </FilterGroup>
        <FilterGroup title="Розмір">
          {/* У майбутньому тут буде список розмірів */}
           <p>Список...</p>
        </FilterGroup>
      </div>
    </div>
  );
}

export default Sidebar;