import { api } from './api'; 

export async function getUserCryptoAmount(userId,cryptoId) {
    const response = await api.get(`/posseder/user/${userId}/crypto/${cryptoId}`);
    return response.data;
  }
  