export interface WalletState {
  isConnected: boolean;
  address?: string;
  favorites: string[];
}

export interface OnchainData {
  address: string;
  balance: string;
  transactions: number;
  holders: {
    [key: string]: number;
  };
}