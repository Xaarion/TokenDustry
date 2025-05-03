import { api } from './api'; 

export async function getCryptos() {
  const response = await api.get('/cryptos');
  return response.data;
}

