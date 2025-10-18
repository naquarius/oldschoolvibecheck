import * as ToggleGroup from '@radix-ui/react-toggle-group';
import clsx from 'clsx';

export function ModeSegment({
  value,
  onChange,
}: {
  value: 'vibe' | 'standard';
  onChange: (v: 'vibe' | 'standard') => void;
}) {
  const item =
    'px-6 py-3 font-serif text-xl rounded-full transition-colors ' +
    'focus-visible:outline-2 focus-visible:outline-black';

  return (
    <ToggleGroup.Root
      type="single"
      value={value}
      onValueChange={(v) => v && onChange(v as any)}
      className="inline-flex gap-3 bg-transparent"
      aria-label="Mode"
    >
      <ToggleGroup.Item
        value="vibe"
        className={clsx(
          item,
          value === 'vibe'
            ? 'text-[#F2EDE6] bg-[image:var(--paper-sage)] bg-cover'
            : 'text-[#2C3A32] bg-transparent outline outline-1 outline-[#2C3A32]/30'
        )}
      >
        VIBE MODE
      </ToggleGroup.Item>

      <ToggleGroup.Item
        value="standard"
        className={clsx(
          item,
          value === 'standard'
            ? 'text-[#F2EDE6] bg-[image:var(--paper-rust)] bg-cover'
            : 'text-[#573B2E] bg-transparent outline outline-1 outline-[#573B2E]/30'
        )}
      >
        STANDARD
        <br />
        MODE
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
}
