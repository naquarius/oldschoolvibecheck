import { Fragment } from 'react';
import { Sparkle } from './Sparkle';

// Renders copy with every ✨ swapped for the drawn gold sparkle.
export const SparkleText = ({ text }: { text: string }) => {
  const parts = text.split('✨');

  return (
    <>
      {parts.map((part, index) => (
        <Fragment key={index}>
          {part}
          {index < parts.length - 1 && (
            <Sparkle className="inline-sparkle" size={14} />
          )}
        </Fragment>
      ))}
    </>
  );
};
