import { api } from './api'; 

export async function loginUser(identif, mdp) {
  const response = await api.get('/utilisateurs/connexion', {
    params: { identif, mdp }
  });
  return response.data;
}

export async function getUserCredits(userId) {
  const response = await api.get(`/historique/solde/${userId}`);
  return response.data;
}
