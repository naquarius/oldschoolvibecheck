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
    <div style={{ display: 'inline-flex', alignItems: 'center' }}>
      <Switch.Root
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="switch-root"
      >
        <span className="switch-label">{label}</span>
        <Switch.Thumb className="switch-thumb" />
      </Switch.Root>
    </div>
  );
}
