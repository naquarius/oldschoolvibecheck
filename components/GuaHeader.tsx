import { generateCrystalGuaSVG } from '@/lib/utils/svg-generator';
import styles from './GuaHeader.module.css';

interface GuaHeaderProps {
  guaData: any;
  title: string;
  binary: string;
  colorTheme: 'pink' | 'blue';
}

export const GuaHeader = ({
  guaData,
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
            <div className={styles.guaName}>{guaData.name}</div>
            <span className={styles.guaNumber}>#{guaData.id}</span>
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
