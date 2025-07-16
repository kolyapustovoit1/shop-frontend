import styles from './Button.module.css';

function Button({ children, href, type = 'button', onClick }) {
  if (type === 'link') {
    return (
      <a href={href} className={styles.button}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
}

export default Button;