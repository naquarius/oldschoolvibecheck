import { useLanguage } from '@/lib/context/LanguageContext';
import { vibeJudgmentsEn, vibeJudgmentsZh } from '@/lib/data/vibes';
import { i18n } from '@/lib/i18n';
import cardStyles from './GuaCard.module.css';
import { GuaHeader } from './GuaHeader';
import styles from './VibeCard.module.css';

interface VibeCardProps {
  guaData: { id: number };
  binary: string;
  title: string;
  colorTheme: 'pink' | 'blue';
}

export const VibeCard = ({
  guaData,
  binary,
  title,
  colorTheme,
}: VibeCardProps) => {
  const { language } = useLanguage();
  const vibeJudgments = language === 'zh' ? vibeJudgmentsZh : vibeJudgmentsEn;
  const vibeInfo = vibeJudgments.find((v) => v.id === guaData.id);
  const t = i18n.getUiStrings();

  if (!vibeInfo) return null;

  return (
    <div className={cardStyles.guaCard}>
      <GuaHeader
        guaData={guaData}
        title={title}
        binary={binary}
        colorTheme={colorTheme}
      />
      <div className={`${styles.guaReading} ${styles.vibeMode}`}>
        <div className={styles.vibeContent}>
          {/* VIBE */}
          <div className={styles.vibeSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEmoji}>🎯</span>
              <h5 className={styles.sectionTitle}>{t.theVibe.toUpperCase()}</h5>
            </div>
            <p className={`${styles.readingText} ${styles.vibeText}`}>
              {vibeInfo.vibe}
            </p>
          </div>

          {/* REAL TALK - The situation explained */}
          <div className={styles.vibeSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEmoji}>💬</span>
              <h5 className={styles.sectionTitle}>
                {t.realTalk.toUpperCase()}
              </h5>
            </div>
            <p className={`${styles.readingText} ${styles.vibeText}`}>
              {vibeInfo.realTalk}
            </p>
          </div>

          {/* THE MOVE - What to do */}
          <div className={styles.vibeSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEmoji}>✨</span>
              <h5 className={styles.sectionTitle}>{t.theMove.toUpperCase()}</h5>
            </div>
            <p className={`${styles.readingText} ${styles.vibeText}`}>
              {vibeInfo.theMove}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
