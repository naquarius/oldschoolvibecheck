import { i18n } from '@/lib/i18n';
import { useState } from 'react';
import { GuaHeader } from './GuaHeader';
import styles from './TraditionalCard.module.css';
import cardStyles from './GuaCard.module.css';

interface TraditionalCardProps {
  guaData: any;
  modernData: any;
  binary: string;
  title: string;

  colorTheme: 'pink' | 'blue';
}

export const TraditionalCard = ({
  guaData,
  modernData,
  title,
  binary,
  colorTheme,
}: TraditionalCardProps) => {
  const [showReference, setShowReference] = useState(false);
  const strings = i18n.getUiStrings();

  return (
    <div className={cardStyles.guaCard}>
      <GuaHeader
        guaData={guaData}
        title={title}
        binary={binary}
        colorTheme={colorTheme}
      />
      <div className={styles.traditionalSection}>
        <div className={styles.modernStandard}>
          <h4 className={styles.readingLabel}>{strings.modernInterpretation}</h4>
          <p className={styles.readingText}>{modernData.standard}</p>
        </div>

        <div className={styles.referenceSection}>
          <button
            onClick={() => setShowReference(!showReference)}
            className={styles.referenceToggle}
          >
            <span>{strings.classicalReference}</span>
            <span className={`arrow ${showReference ? 'expanded' : ''}`}>
              ▾
            </span>
          </button>

          {showReference && (
            <div className={styles.referenceContent}>
              <div className={styles.referenceItem}>
                <h5>{strings.fullName}</h5>
                <p>{guaData.full_name}</p>
              </div>
              <div className={styles.referenceItem}>
                <h5>{strings.classicalJudgment}</h5>
                <p className={styles.classicalText}>{guaData.judgment}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
