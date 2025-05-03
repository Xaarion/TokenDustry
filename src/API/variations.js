import { api } from './api'; 

export async function getvaleurCrypto(cryptoId) {
    const response = await api.get(`/variations/crypto/${cryptoId}`);
    return response.data;
  }