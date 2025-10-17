import { useLanguage } from '@/lib/context/LanguageContext';
import {
  vibeJudgmentsEn,
  vibeJudgmentsZh,
} from '@/lib/data/unchanged-judgments/vibe';
import { i18n } from '@/lib/i18n';
import { GuaHeader } from './GuaHeader';

interface VibeCardProps {
  guaData: { id: number };
  binary: string;
  title: string;
  subtitle: string;
  colorTheme: 'pink' | 'blue';
}

export const VibeCard = ({
  guaData,
  binary,
  title,
  subtitle,
  colorTheme,
}: VibeCardProps) => {
  const { language } = useLanguage();
  const vibeJudgments = language === 'zh' ? vibeJudgmentsZh : vibeJudgmentsEn;
  const vibeInfo = vibeJudgments.find((v) => v.id === guaData.id);

  return (
    <div className="gua-card">
      <GuaHeader
        guaData={guaData}
        title={title}
        binary={binary}
        colorTheme={colorTheme}
      />
      <div className="gua-reading vibe-mode">
        <h4 className="reading-label">{subtitle}</h4>
        <div className="vibe-content">
          <div className="vibe-header">
            <h3 className="vibe-title">{vibeInfo.vibe}</h3>
            <span className={`energy-badge ${vibeInfo.energy.toLowerCase()}`}>
              {vibeInfo.energy}
            </span>
          </div>

          <p className="reading-text vibe-text">{vibeInfo.interpretation}</p>

          <div className="vibe-keywords">
            {vibeInfo.keywords.map((keyword, idx) => (
              <span key={idx} className="keyword-tag">
                {keyword}
              </span>
            ))}
          </div>

          <div className="vibe-suitable">
            <h5>{i18n.getUiStrings().suitableFor}</h5>
            <p>{vibeInfo.suitableFor}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
