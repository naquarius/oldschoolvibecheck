import * as React from 'react';
import { LangSwitch } from './LangSwitch';
import { ModeSegment } from './ModeSegment';
import { TexturedButton } from './TexturedButton';

export default function Controls() {
  const [mode, setMode] = React.useState<'vibe' | 'standard'>('vibe');
  const [en, setEn] = React.useState(true);

  return (
    <div className="space-y-8">
      <ModeSegment value={mode} onChange={setMode} />
      <LangSwitch checked={en} onCheckedChange={setEn} label="EN" />

      <TexturedButton color="rust">NEW READING</TexturedButton>

      <div className="flex gap-4">
        <TexturedButton color="sage" aria-label="Back">
          ←
        </TexturedButton>
        <TexturedButton color="sage">NEW READING</TexturedButton>
        <TexturedButton color="sage" aria-label="Save">
          SAVE →
        </TexturedButton>
      </div>
    </div>
  );
}
