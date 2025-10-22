import { TraditionalCard } from './TraditionalCard';
import { VibeCard } from './VibeCard';

interface GuaCardProps {
  guaData: any;
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
  return showVibeText ? (
    <VibeCard
      guaData={guaData}
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
