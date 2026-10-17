import { i18n } from '@/lib/i18n';
import { type LocalizedGuaData } from '@/lib/i18n/types';
import styles from './TraditionalCard.module.css';

interface TraditionalCardProps {
  guaData: LocalizedGuaData;
  title: string;
}

export const TraditionalCard = ({ guaData, title }: TraditionalCardProps) => {
  const strings = i18n.getUiStrings();

  return (
    <article className={styles.reading}>
      <h2 className={styles.name}>{guaData.name}</h2>
      <p className={styles.meta}>
        <span className={styles.number}>#{guaData.id}</span> ·{' '}
        <span className={styles.label}>{title}</span> · {strings.fullName}:{' '}
        {guaData.full_name}
      </p>

      <h3 className={`${styles.label} ${styles.judgmentLabel}`}>
        {strings.classicalJudgment}
      </h3>
      <p className={styles.judgment}>{guaData.judgment}</p>
    </article>
  );
};
