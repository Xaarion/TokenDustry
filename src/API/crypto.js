import { api } from './api'; 

export async function getCryptos() {
  const response = await api.get('/cryptos');
  return response.data;
}

export async function subtractCrypto(userId, cryptoId, quantite) {
  return api.put(`/posseder/soustraire`, {
    id: userId,
    idCrypto: cryptoId,
    quantite
  });
}

export async function getCryptoById(id) {
  const response = await api.get(`/cryptos/${id}`);
  return response.data;
}