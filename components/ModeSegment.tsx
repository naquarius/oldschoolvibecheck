import * as ToggleGroup from '@radix-ui/react-toggle-group';

export function ModeSegment({
  value,
  onChange,
}: {
  value: 'vibe' | 'standard';
  onChange: (v: 'vibe' | 'standard') => void;
}) {
  return (
    <ToggleGroup.Root
      type="single"
      value={value}
      onValueChange={(v) => v && onChange(v as any)}
      aria-label="Mode"
      className="mode-group"
    >
      <ToggleGroup.Item value="vibe" className="btn mode-item">
        VIBE MODE
      </ToggleGroup.Item>

      <ToggleGroup.Item value="standard" className="btn mode-item">
        <span className="block -mb-0.5">STANDARD</span>
        <span className="block -mt-0.5">MODE</span>
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
}
