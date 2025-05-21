import { api } from './api'; 

export async function getUserCryptoAmount(userId,cryptoId) {
    const response = await api.get(`/posseder/user/${userId}/crypto/${cryptoId}`);
    return response.data;
  }

  export async function  getUserCryptos(userId) {
    const response = await api.get(`/posseder/user/${userId}`);
    return response.data; // Ex : [{ id: 1, libelle: 'P-coin', quantite: 50 }]
  }