import { create } from 'zustand';

interface GameSelectValuesType {
  mode: string;
  href: string;
}

interface GameSelectType {
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

export const useGameSelect = create<GameSelectType>((set) => ({
  classicSelect: { mode: 'Classic', href: '/daily' },
  quoteSelect: { mode: 'Quote', href: '/daily/quote' },
  abilitySelect: { mode: 'Ability', href: '/daily/ability' },
  emojiSelect: { mode: 'Emoji', href: '/daily/emoji' },
  playerSelect: { mode: 'Pro Player', href: '/daily/players' },
  splashSelect: { mode: 'Splash', href: '/daily/splash' },

  setClassicSelect: (data: any) => set(() => ({ classicSelect: data })),
  setQuoteSelect: (data: any) => set(() => ({ quoteSelect: data })),
  setAbilitySelect: (data: any) => set(() => ({ abilitySelect: data })),
  setEmojiSelect: (data: any) => set(() => ({ emojiSelect: data })),
  setPlayerSelect: (data: any) => set(() => ({ playerSelect: data })),
  setSplashSelect: (data: any) => set(() => ({ splashSelect: data })),
}));
