import { generateCrystalGuaSVG } from '@/lib/utils/svg-generator';

interface GuaHeaderProps {
  guaData: any;
  title: string;
  binary: string;
  colorTheme: 'pink' | 'blue';
}

export const GuaHeader = ({
  guaData,
  title,
  binary,
  colorTheme,
}: GuaHeaderProps) => {
  return (
    <div className="gua-header-section">
      <div className="gua-header">
        <div className="gua-info">
          <h3 className="gua-title">{title}</h3>
          <div className="gua-name-container">
            <div className="gua-name">{guaData.name}</div>
            <span className="gua-number">#{guaData.id}</span>
          </div>
        </div>
      </div>

      <div className="gua-visual">
        <div
          dangerouslySetInnerHTML={{
            __html: generateCrystalGuaSVG(binary, colorTheme),
          }}
        />
      </div>
    </div>
  );
};
