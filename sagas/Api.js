import axios from 'axios';
const url = 'http://localhost:3000/user';

export const api = axios.create({
  baseURL: 'http://localhost:3000/user',
  timeout: 1000,
  headers: {'X-Requested-With': 'XMLHttpRequest'},
});

export const getUser = body => {
  return api.get(`user/${body.email}`);
};
