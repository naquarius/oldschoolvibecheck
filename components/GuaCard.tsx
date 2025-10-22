import { type LocalizedGuaData } from '@/lib/i18n/types';
import { TraditionalCard } from './TraditionalCard';
import { VibeCard } from './VibeCard';

interface GuaCardProps {
  guaData: LocalizedGuaData;
  binary: string;
  title: string;
  showVibeText?: boolean;
  colorTheme: 'pink' | 'blue';
}

export const GuaCard = ({
  guaData,
  binary,
  title,
  showVibeText = false,
  colorTheme,
}: GuaCardProps) => {
  const { name, id } = guaData;
  return showVibeText ? (
    <VibeCard
      name={name}
      id={id}
      binary={binary}
      title={title}
      colorTheme={colorTheme}
    />
  ) : (
    <TraditionalCard
      guaData={guaData}
      binary={binary}
      title={title}
      colorTheme={colorTheme}
    />
  );
};

export default GuaCard;
