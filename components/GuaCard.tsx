import { TraditionalCard } from './TraditionalCard';
import { VibeCard } from './VibeCard';

interface GuaCardProps {
  guaData: any;
  modernData: any;
  binary: string;
  title: string;
  subtitle: string;
  showVibeText?: boolean;
  colorTheme: 'pink' | 'blue';
}

export const GuaCard = ({
  guaData,
  modernData,
  binary,
  title,
  subtitle,
  showVibeText = false,
  colorTheme,
}: GuaCardProps) => {
  return showVibeText ? (
    <VibeCard
      guaData={guaData}
      binary={binary}
      title={title}
      subtitle={subtitle}
      colorTheme={colorTheme}
    />
  ) : (
    <TraditionalCard
      guaData={guaData}
      modernData={modernData}
      binary={binary}
      title={title}
      colorTheme={colorTheme}
    />
  );
};

export default GuaCard;
