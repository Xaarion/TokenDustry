import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/'
});

export const login = (identif, mdp) => {
  return api.get(`/utilisateurs/connect?identif=${identif}&mdp=${mdp}`);
};
