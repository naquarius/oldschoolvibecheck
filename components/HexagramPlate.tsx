import { Fragment } from 'react';
import { Hexagram } from './Hexagram';
import { Sparkle } from './Sparkle';
import styles from './HexagramPlate.module.css';

export interface PlateFigure {
  binary: string;
  name: string;
  id: number | string;
  label?: string;
  changing?: number[];
}

// The screen's one sage stone block, carrying one hexagram or the original → changed pair.
interface HexagramPlateProps {
  figures: PlateFigure[];
  /** Adds the stone block's edge-breaking sparkle. */
  sparkle?: boolean;
  /** The reading was just thrown: draw the first hexagram line by line. */
  casting?: boolean;
}

export const HexagramPlate = ({
  figures,
  sparkle,
  casting = false,
}: HexagramPlateProps) => (
  <div
    className={`${styles.plate} ${
      figures.length > 1 ? styles.pair : styles.single
    }`}
  >
    {sparkle && (
      <Sparkle className="stone-sparkle stone-sparkle-large plate-sparkle" size={36} />
    )}
    {figures.map((figure, index) => (
      <Fragment key={`${figure.id}-${index}`}>
        {index > 0 && (
          <svg
            className={`${styles.arrow} cast-reveal`}
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M3 11h14.2l-5.1-5.1L13.5 4.5 21 12l-7.5 7.5-1.4-1.4 5.1-5.1H3z"
              fill="currentColor"
            />
          </svg>
        )}
        <figure
          className={`${styles.figure} ${index > 0 ? 'cast-reveal' : ''}`}
        >
          <Hexagram
            className={styles.drawing}
            binary={figure.binary}
            changing={figure.changing}
            animate={casting && index === 0}
          />
          <figcaption className={`${styles.caption} cast-reveal`}>
            <span className={styles.name}>{figure.name}</span>
            <span className={styles.number}>
              #{figure.id}
              {figure.label && (
                <>
                  {' · '}
                  <span className={styles.label}>{figure.label}</span>
                </>
              )}
            </span>
          </figcaption>
        </figure>
      </Fragment>
    ))}
    {casting && <span className={styles.castBar} aria-hidden="true" />}
  </div>
);
