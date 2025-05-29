import { api } from './api'; 

export async function loginUser(identif, mdp) {
  const response = await api.get('/utilisateurs/connexion', {
    params: { identif, mdp }
  });
  return response.data;
} 

export async function checkIfUserExists(mail, identif) {
  const response = await api.get('/utilisateurs/existe', {
    params: { mail, identifiant: identif }
  });
  return response.data; // retourne true ou false
}

export async function createUser(user) {
  const response = await api.post('/utilisateurs', user);
  return response.data;
} 

export async function getUserPseudoById(id) {
  const response = await api.get(`/utilisateurs/pseudo/id/${id}`);
  return response.data;
}

