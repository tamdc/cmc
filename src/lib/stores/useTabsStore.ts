import {create} from 'zustand'
import { CoinCategory } from '../types/coin'

interface TabsState {
  activeTab: CoinCategory;
  setActiveTab: (tab: CoinCategory) => void;
  highlightData: Record<CoinCategory, any>;
  setHighlightData: (tab: CoinCategory, data: any) => void;
}

export const useTabsStore = create<TabsState>(
  (set) => ({
    activeTab: 'all',
    setActiveTab: (tab: CoinCategory) => set({activeTab: tab}),
    highlightData: {
      all: null,
      defi: null,
      nft: null,
      rwa: null,
    },
    setHighlightData: (tab: CoinCategory, data: any) => set((state) => ({
      highlightData: {...state.highlightData, [tab]: data}
    }))
  })
)