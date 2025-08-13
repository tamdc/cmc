import { create } from "zustand";

type Theme = 'light' | 'dark'

interface AppState {
  theme: Theme;
  isLoading: boolean;
  error: string | null;
  setTheme: (theme: Theme) => void;
  setIsLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  clearError: () => void;
}

export const useAppStore = create<AppState>(
  (set) => ({
    theme: 'light',
    isLoading: false,
    error: null,
    setTheme: (theme: Theme) => set({ theme }),
    setIsLoading: (isLoading: boolean) => set({ isLoading }),
    setError: (error: string | null) => set({ error }),
    clearError: () => set({error: null})
  })
)
