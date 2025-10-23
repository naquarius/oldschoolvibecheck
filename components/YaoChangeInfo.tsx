import { GuaResultType } from '@/lib/core/types';
import { i18n } from '@/lib/i18n';
import styles from './GuaResult.module.css';

interface Props {
  result: GuaResultType;
}

export const YaoChangeInfo = ({ result }: Props) => {
  const { changingPositions } = result;
  const strings = i18n.getUiStrings();

  return (
    <div className={styles.resultFooter}>
      {changingPositions.length > 0 ? (
        <div className={styles.changeInfo}>
          <div className={styles.changeBadge}>
            <span className={styles.changeIcon}>⚡</span>
            <span>{strings.energyShiftDetected}</span>
          </div>
          <p className={styles.changeText}>
            {strings.changingLinesAt} {result.changingPositions.join(', ')}
            {strings.focusFutureDirection}
          </p>
        </div>
      ) : (
        <div className={styles.stableInfo}>
          <div className={styles.stableBadge}>
            <span className={styles.stableIcon}>🎯</span>
            <span>{strings.stableEnergy}</span>
          </div>
          <p className={styles.stableText}>{strings.noChangingLines}</p>
        </div>
      )}
    </div>
  );
};
