export interface Coin {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  cmc_rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  quote: {
    USD: {
      price: number;
      volume_24h: number;
      percent_change_1h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      market_cap: number;
      last_updated: string;
    }
  }
}

export interface CoinDetail {
  description: string;
  logo: string;
  urls: {
    website: string[];
    technical_doc: string[];
    twitter: string[];
  };
  tags: string[];
  category: string;
}

export type CoinCategory = 'all' | 'defi' | 'nft' | 'rwa';