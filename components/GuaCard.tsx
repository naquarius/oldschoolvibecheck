import { useLanguage } from '@/lib/context/LanguageContext';
import { generateCrystalGuaSVG } from '@/lib/utils/svg-generator';
import { useState } from 'react';

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
  const { language } = useLanguage();
  const [showReference, setShowReference] = useState<{ [k: number]: boolean }>(
    {}
  );

  const toggleReference = (guaId: number) => {
    setShowReference((prev) => ({ ...prev, [guaId]: !prev[guaId] }));
  };

  return (
    <div className="gua-card">
      <div className="gua-header">
        <div className="gua-info">
          <h3 className="gua-title">{title}</h3>
          <div className="gua-name">{guaData.name}</div>
          <span className="gua-number">#{guaData.id}</span>
        </div>
      </div>

      <div className="gua-visual">
        <div
          dangerouslySetInnerHTML={{
            __html: generateCrystalGuaSVG(binary, colorTheme),
          }}
        />
      </div>

      <div className="gua-reading">
        <h4 className="reading-label">{subtitle}</h4>
        <p className={`reading-text ${showVibeText ? 'vibe-text' : ''}`}>
          {showVibeText ? modernData.vibe : modernData.standard}
        </p>
      </div>

      <div className="reference-section">
        <button
          onClick={() => toggleReference(guaData.id)}
          className="reference-toggle"
        >
          <span>
            {language === 'zh' ? '📜 经典参考' : '📜 Classical Reference'}
          </span>
          <span
            className={`arrow ${showReference[guaData.id] ? 'expanded' : ''}`}
          >
            ▾
          </span>
        </button>

        {showReference[guaData.id] && (
          <div className="reference-content">
            <div className="reference-item">
              <h5>{language === 'zh' ? '全名' : 'Full Name'}</h5>
              <p>{guaData.full_name}</p>
            </div>
            <div className="reference-item">
              <h5>{language === 'zh' ? '经典卦辞' : 'Classical Judgment'}</h5>
              <p className="classical-text">{guaData.judgment}</p>
            </div>
            {!showVibeText && (
              <div className="reference-item">
                <h5>
                  {language === 'zh' ? '现代解读' : 'Modern Interpretation'}
                </h5>
                <p>{modernData.standard}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GuaCard;
