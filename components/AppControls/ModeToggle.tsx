import { useApp } from '@/lib/context/AppContext';
import { i18n } from '@/lib/i18n';
import styles from './ModeToggle.module.css';

export const ModeToggle = () => {
  const { mode, setTraditionalMode, setVibeMode } = useApp();
  const strings = i18n.getUiStrings();
  const showVibe = mode === 'vibe';

  return (
    <div className={styles.vibeToggle}>
      <button
        onClick={setVibeMode}
        className={`${styles.toggleButton} ${showVibe ? styles.active : ''}`}
      >
        {strings.vibeMode}
      </button>
      <button
        onClick={setTraditionalMode}
        className={`${styles.toggleButton} ${!showVibe ? styles.active : ''}`}
      >
        {strings.traditionalMode}
      </button>
    </div>
  );
};
