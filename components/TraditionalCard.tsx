import { i18n } from '@/lib/i18n';
import { type LocalizedGuaData } from '@/lib/i18n/types';
import cardStyles from './GuaCard.module.css';
import { GuaHeader } from './GuaHeader';
import styles from './TraditionalCard.module.css';

interface TraditionalCardProps {
  guaData: LocalizedGuaData;
  binary: string;
  title: string;
  colorTheme: 'pink' | 'blue';
}

export const TraditionalCard = ({
  guaData,
  title,
  binary,
  colorTheme,
}: TraditionalCardProps) => {
  const strings = i18n.getUiStrings();
  const { name, id } = guaData;
  return (
    <div>
      <div className={cardStyles.guaCard}>
        <GuaHeader
          name={name}
          id={`${id}`}
          title={title}
          binary={binary}
          colorTheme={colorTheme}
        />
        <div className={styles.traditionalSection}>
          <div className={styles.referenceSection}>
            <span>{strings.classicalReference}</span>
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
          </div>
        </div>
      </div>
    </div>
  );
};
