import * as Switch from '@radix-ui/react-switch';

export function LangSwitch({
  checked,
  onCheckedChange,
  label = 'EN',
}: {
  checked: boolean;
  onCheckedChange: (v: boolean) => void;
  label?: string;
}) {
  return (
    <Switch.Root
      checked={checked}
      onCheckedChange={onCheckedChange}
      className="switch-root"
      aria-label="Language toggle"
    >
      <span className="switch-label">{label}</span>
      <Switch.Thumb className="switch-thumb" />
    </Switch.Root>
  );
}
