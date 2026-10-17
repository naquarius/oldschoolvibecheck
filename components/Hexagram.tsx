interface HexagramProps {
  /** Binary string in bottom-up order (first char = bottom yao). */
  binary: string;
  /** 1-based positions (bottom = 1) of changing lines, drawn in gold with a bronze edge. */
  changing?: number[];
  className?: string;
}

const LINE_HEIGHT = 6;
const LINE_GAP = 10;
const LINE_WIDTH = 100;
const BREAK = 16;
const PAD = 1;

// Six soft lines drawn bottom-up; changing lines take the coins' gold and bronze.
export const Hexagram = ({ binary, changing = [], className }: HexagramProps) => {
  const lines = binary.split('');
  const height = lines.length * LINE_HEIGHT + (lines.length - 1) * LINE_GAP;

  return (
    <svg
      className={className}
      viewBox={`${-PAD} ${-PAD} ${LINE_WIDTH + PAD * 2} ${height + PAD * 2}`}
      aria-hidden="true"
      focusable="false"
    >
      {lines.map((bit, index) => {
        const y = height - LINE_HEIGHT - index * (LINE_HEIGHT + LINE_GAP);
        const isChanging = changing.includes(index + 1);
        const paint = isChanging
          ? { fill: 'var(--gold)', stroke: '#8a6420', strokeWidth: 1.5 }
          : { fill: 'currentColor' };
        const segment = (x: number, width: number) => (
          <rect
            x={x}
            y={y}
            width={width}
            height={LINE_HEIGHT}
            rx={LINE_HEIGHT / 2}
            {...paint}
          />
        );
        const half = (LINE_WIDTH - BREAK) / 2;

        return (
          <g key={index}>
            {bit === '1' ? (
              segment(0, LINE_WIDTH)
            ) : (
              <>
                {segment(0, half)}
                {segment(LINE_WIDTH - half, half)}
              </>
            )}
          </g>
        );
      })}
    </svg>
  );
};
