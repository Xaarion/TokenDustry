import { api } from './api'; 

export async function getUserCredits(userId) {
  const response = await api.get(`/historique/solde/${userId}`);
  return response.data;
}