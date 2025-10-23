import { useApp } from '@/lib/context/AppContext';
import { i18n } from '@/lib/i18n';
import styles from './GuaResult.module.css';

export const ModeToggle = () => {
  const { mode, setTraditionalMode, setVibeMode } = useApp();
  const strings = i18n.getUiStrings();
  const showVibe = mode === 'vibe';

  console.log('ModeToggle mode:', mode);

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
        {strings.standardMode}
      </button>
    </div>
  );
};
