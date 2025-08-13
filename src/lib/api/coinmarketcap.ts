import { Coin, CoinCategory, CoinDetail } from "../types/coin";
import { CMCResponse } from "../types/api";

const BASE_URL = 'https://pro-api.coinmarketcap.com/v1';
const API_KEY = process.env.NEXT_PUBLIC_COINMARKETCAP_API_KEY;

const headers = {
  'X-CMC_PRO_API_KEY': API_KEY || '',
  'Accept': 'application/json'
}

export const coinmarketcapAPI = {
  async getCoins(
    limit: number = 50,
    start: number = 1,
    category?: CoinCategory
  ): Promise<Coin[]> {
    try {
      const params = new URLSearchParams({
        limit: limit.toString(),
        start: start.toString(),
        convert: 'USD'
      })

      if (category && category !== 'all') {
        params.append('tag', category)
      }

      const response = await fetch(
        `${BASE_URL}/cryptocurrency/listings/latest?${params}`,
        {headers}
      )

      if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data: CMCResponse<Coin[]> = await response.json();
      return data.data;

    } catch (error) {
      console.error('Error fetching coins: ', error);
      throw error;
    }
  },
  async getCoinDetail(id: string): Promise<CoinDetail> {
    try {
      const response = await fetch( 
        `${BASE_URL}/cryptocurrency/info?id=${id}`,
        { headers }
      )
      
      if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data:CMCResponse<Record<string, CoinDetail>> = await response.json();
      return data.data[id];

    } catch (error) {
      console.error(`Error fetching coin detail: `, error)
      throw error;
    }
  }
}