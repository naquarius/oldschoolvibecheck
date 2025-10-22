import { useLanguage } from '@/lib/context/LanguageContext';
import {
  vibeJudgmentsEn,
  vibeJudgmentsZh,
} from '@/lib/data/vibes';
import { i18n } from '@/lib/i18n';
import { GuaHeader } from './GuaHeader';
import styles from './VibeCard.module.css';
import cardStyles from './GuaCard.module.css';

interface VibeCardProps {
  guaData: { id: number };
  binary: string;
  title: string;
  subtitle: string;
  colorTheme: 'pink' | 'blue';
}

export const VibeCard = ({
  guaData,
  binary,
  title,
  subtitle,
  colorTheme,
}: VibeCardProps) => {
  const { language } = useLanguage();
  const vibeJudgments = language === 'zh' ? vibeJudgmentsZh : vibeJudgmentsEn;
  const vibeInfo = vibeJudgments.find((v) => v.id === guaData.id);
  const t = i18n.getUiStrings(language);

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
              <h5 className={styles.sectionTitle}>
                {t.theVibe.toUpperCase()}
              </h5>
            </div>
            <p className={`${styles.readingText} ${styles.vibeText}`}>{vibeInfo.vibe}</p>
          </div>

          {/* REAL TALK - The situation explained */}
          <div className={styles.vibeSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEmoji}>💬</span>
              <h5 className={styles.sectionTitle}>
                {t.realTalk.toUpperCase()}
              </h5>
            </div>
            <p className={`${styles.readingText} ${styles.vibeText}`}>{vibeInfo.realTalk}</p>
          </div>

          {/* THE MOVE - What to do */}
          <div className={styles.vibeSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEmoji}>✨</span>
              <h5 className={styles.sectionTitle}>
                {t.theMove.toUpperCase()}
              </h5>
            </div>
            <p className={`${styles.readingText} ${styles.vibeText}`}>{vibeInfo.theMove}</p>
          </div>
        </div>
      </div>
    </div>
  );
};