import { create } from 'zustand';
import { GameSelectType } from './store.model';

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
