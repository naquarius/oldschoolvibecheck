import styles from './CoffeeButton.module.css';

export const CoffeeButton = () => (
  <a
    href="https://www.buymeacoffee.com/earthedsouls"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.coffeeButton}
    aria-label="Support with coffee"
  >
    <span className={styles.coffeeEmoji}>☕</span>
    {/* <span className={styles.coffeeText}>BMAC</span> */}
  </a>
);
