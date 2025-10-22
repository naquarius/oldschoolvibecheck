import { i18n } from '@/lib/i18n';
import cardStyles from './GuaCard.module.css';
import { GuaHeader } from './GuaHeader';
import styles from './VibeCard.module.css';

interface VibeCardProps {
  name: string;
  id: number;
  binary: string;
  title: string;
  colorTheme: 'pink' | 'blue';
}

export const VibeCard = ({
  name,
  id,
  binary,
  title,
  colorTheme,
}: VibeCardProps) => {
  const t = i18n.getUiStrings();
  const vibeInfo = i18n.getVibes(id);

  if (!vibeInfo) return null;

  return (
    <div className={cardStyles.guaCard}>
      <GuaHeader
        name={name}
        id={`${id}`}
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
