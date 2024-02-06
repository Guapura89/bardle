import { create } from 'zustand';
import { ChampStore } from './store.model';

export const useChampStore = create<ChampStore>()((set) => ({
  champs: [],
  setChamps(data) {
    set(() => ({ champs: data }));
  },
}));
