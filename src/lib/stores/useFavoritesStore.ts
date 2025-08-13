import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';

interface FavoritesState {
  favorites: string[];
  addFavorite: (coinId: string) => void;
  removeFavorite: (coinId: string) => void;
  isFavorite: (coinId: string) => boolean;
  clearFavorite: () => void;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (coinId: string) =>
        set((state) => ({
          favorites: [...state.favorites, coinId]
        })),
      removeFavorite: (coinId: string) =>
        set(state => ({
          favorites: state.favorites.filter(id => id !== coinId)
        })),
      isFavorite: (coinId: string) => get().favorites.some(id => id === coinId),
      clearFavorite: () => set({favorites: []})
    }),
    {
      name: 'cmc-favorites',
      storage: createJSONStorage(() => localStorage)
    }
  )
)