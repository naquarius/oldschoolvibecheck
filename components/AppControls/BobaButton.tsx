import styles from './BobaButton.module.css';

export const BobaButton = () => (
  <a
    href="https://www.buymeacoffee.com/earthedsouls"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.bobaButton}
    aria-label="Support with boba"
  >
    <svg
      className={styles.bobaIcon}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M14.2 1.2 16 1.8 14.6 6H13z" fill="currentColor" />
      <path d="M4 6.5h16V9H4z" fill="currentColor" />
      <path
        d="M5.2 10.2h13.6l-1.5 11.2a1.8 1.8 0 0 1-1.8 1.6H8.5a1.8 1.8 0 0 1-1.8-1.6z"
        fill="currentColor"
      />
      <circle cx="9.5" cy="19" r="1.1" fill="var(--paper)" />
      <circle cx="12" cy="17.6" r="1.1" fill="var(--paper)" />
      <circle cx="14.5" cy="19" r="1.1" fill="var(--paper)" />
    </svg>
  </a>
);
