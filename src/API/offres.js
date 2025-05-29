import { api } from './api';


export async function getAllOffres() {
  const response = await api.get('/offres');
  return response.data;
}


export async function createOffer(offerPayload) {
  return api.post('/offres', offerPayload);
}

