import { generateCrystalGuaSVG } from '@/lib/utils/svg-generator';
import styles from './GuaHeader.module.css';

interface GuaHeaderProps {
  name: string;
  id: string;
  title: string;
  binary: string;
  colorTheme: 'pink' | 'blue';
}

export const GuaHeader = ({
  name,
  id,
  title,
  binary,
  colorTheme,
}: GuaHeaderProps) => {
  return (
    <div className={styles.guaHeaderSection}>
      <div className={styles.guaHeader}>
        <div className={styles.guaInfo}>
          <h3 className={styles.guaTitle}>{title}</h3>
          <div className={styles.guaNameContainer}>
            <div className={styles.guaName}>{name}</div>
            <span className={styles.guaNumber}>#{id}</span>
          </div>
        </div>
      </div>

      <div className={styles.guaVisual}>
        <div
          dangerouslySetInnerHTML={{
            __html: generateCrystalGuaSVG(binary, colorTheme),
          }}
        />
      </div>
    </div>
  );
};
