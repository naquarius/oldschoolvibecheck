export type Language = 'zh' | 'en';

export interface BaseGuaData {
  id: number;
  symbol: string;
  binary: string;
  pronunciation: string;
}

export interface LocalizedGuaData extends BaseGuaData {
  name: string;
  full_name: string;
  judgment: string;
}

export type UiStrings = {
  // Common
  newReading: string;

  // Header
  appTagline: string;
  whatIsYourVibe: string;
  heroSubtitle: string;
  throwCoins: string;
  threeCoins: string;
  instantResults: string;
  ancientWisdom: string;

  // Language Toggle
  languageToggle: string;
  languageToggleAlt: string;

  // Question Input
  askTheUniverse: string;
  questionPlaceholder: string;

  // Footer
  footerText: string;

  // GuaCard
  fullName: string;
  classicalJudgment: string;
  classicalReference: string;

  // GuaResult
  vibeMode: string;
  traditionalMode: string;
  currentSituation: string;
  yourVibeToday: string;
  theMove: string;
  futureDirection: string;

  // Energy States
  energyShiftDetected: string;
  changingLinesAt: string;
  stableEnergy: string;
  noChangingLines: string;

  // Coin Throw

  // Copy Result
  copyResult: string;
  copied: string;

  // Share
  share: string;
  myVibe: string;
  seeMyReading: string;
  sharedReading: string;
  askYourOwn: string;

  // Cast record
  howItWasCast: string;
  sixThrows: string;
  lineN: string;
  oldYin: string;
  youngYang: string;
  youngYin: string;
  oldYang: string;
  changes: string;
  asked: string;
  ogResult: string;
  changedResult: string;
  changedLines: string;
  noChanges: string;
};
