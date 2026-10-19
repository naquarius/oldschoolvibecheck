import { i18n } from '@/lib/i18n';
import { ReactNode } from 'react';
import { HexagramPlate } from './HexagramPlate';
import styles from './VibeCard.module.css';

interface VibeCardProps {
  name: string;
  id: number;
  binary: string;
  title: string;
  casting?: boolean;
  /** Rendered right under the hexagram card (the cast record). */
  children?: ReactNode;
}

export const VibeCard = ({
  name,
  id,
  binary,
  title,
  casting = false,
  children,
}: VibeCardProps) => {
  const t = i18n.getUiStrings();
  const vibeInfo = i18n.getVibes(id);

  if (!vibeInfo) return null;

  return (
    <article className={styles.vibeCard}>
      <h2 className={`${styles.vibeLine} cast-reveal`}>
        <span className="visually-hidden">{title}: </span>
        {vibeInfo.vibe}
      </h2>

      <HexagramPlate figures={[{ binary, name, id }]} sparkle casting={casting} />

      <div className="cast-reveal">{children}</div>

      <div className={`${styles.sections} cast-reveal`}>
        <section>
          <h3 className={styles.label}>{t.realTalk}</h3>
          <p className={styles.text}>{vibeInfo.realTalk}</p>
        </section>
        <section>
          <h3 className={styles.label}>{t.theMove}</h3>
          <p className={styles.text}>{vibeInfo.theMove}</p>
        </section>
      </div>
    </article>
  );
};
