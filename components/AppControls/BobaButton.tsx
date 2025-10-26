import styles from './BobaButton.module.css';

export const BobaButton = () => (
  <a
    href="https://www.buymeacoffee.com/earthedsouls"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.bobaButton}
    aria-label="Support with boba"
  >
    <span className={styles.bobaEmoji}>🧋</span>
    {/* <span className={styles.bobaText}>BMAC</span> */}
  </a>
);
