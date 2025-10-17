import { i18n } from '@/lib/i18n';
import { useState } from 'react';
import { GuaHeader } from './GuaHeader';

interface TraditionalCardProps {
  guaData: any;
  modernData: any;
  binary: string;
  title: string;

  colorTheme: 'pink' | 'blue';
}

export const TraditionalCard = ({
  guaData,
  modernData,
  title,
  binary,
  colorTheme,
}: TraditionalCardProps) => {
  const [showReference, setShowReference] = useState(false);
  const strings = i18n.getUiStrings();

  return (
    <div className="gua-card">
      <GuaHeader
        guaData={guaData}
        title={title}
        binary={binary}
        colorTheme={colorTheme}
      />
      <div className="traditional-section">
        <div className="modern-standard">
          <h4 className="reading-label">{strings.modernInterpretation}</h4>
          <p className="reading-text">{modernData.standard}</p>
        </div>

        <div className="reference-section">
          <button
            onClick={() => setShowReference(!showReference)}
            className="reference-toggle"
          >
            <span>{strings.classicalReference}</span>
            <span className={`arrow ${showReference ? 'expanded' : ''}`}>
              ▾
            </span>
          </button>

          {showReference && (
            <div className="reference-content">
              <div className="reference-item">
                <h5>{strings.fullName}</h5>
                <p>{guaData.full_name}</p>
              </div>
              <div className="reference-item">
                <h5>{strings.classicalJudgment}</h5>
                <p className="classical-text">{guaData.judgment}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
