import { useApp } from '@/lib/context/AppContext';
import { i18n } from '@/lib/i18n';
import styles from './LanguageToggle.module.css';

export const LanguageToggle = () => {
  const strings = i18n.getUiStrings();
  const { language, setLanguage } = useApp();

  return (
    <div className={styles.languageToggle}>
      <button
        onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
        className={styles.languageButton}
      >
        {language === 'zh' ? strings.languageToggle : strings.languageToggleAlt}
      </button>
    </div>
  );
};
