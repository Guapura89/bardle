export interface Champ {
  roleChamp: string[];
  genderChamp: string;
  titleChamp: string;
  partypeChamp: string;
  shortName: string;
  displayName: string;
  rangeType: string[];
  quotesStack: string[];
  specieChamp: string[];
  positionChamp: string[];
  emojiStack: string[];
  regionFrom: string[];
  releaseDate: string;
  id: string;
}

export interface ChampStore {
  champs: Champ[];
  setChamps: (data: Champ[]) => void;
}

export interface GameSelectValuesType {
  mode: string;
  href: string;
}

export interface GameSelectType {
  classicSelect: GameSelectValuesType;
  quoteSelect: GameSelectValuesType;
  abilitySelect: GameSelectValuesType;
  emojiSelect: GameSelectValuesType;
  playerSelect: GameSelectValuesType;
  splashSelect: GameSelectValuesType;
  setClassicSelect: (data: any) => void;
  setQuoteSelect: (data: any) => void;
  setAbilitySelect: (data: any) => void;
  setEmojiSelect: (data: any) => void;
  setPlayerSelect: (data: any) => void;
  setSplashSelect: (data: any) => void;
}
