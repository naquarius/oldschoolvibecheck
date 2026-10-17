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
    <p className={styles.shiftInfo}>
      {changingPositions.length > 0 ? (
        <>
          <strong className={styles.shiftDetected}>
            {strings.energyShiftDetected}
          </strong>
          {strings.changingLinesAt} {changingPositions.join(', ')}
        </>
      ) : (
        <>
          <strong>{strings.stableEnergy}</strong>
          {strings.noChangingLines}
        </>
      )}
    </p>
  );
};
