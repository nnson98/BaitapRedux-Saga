import axios from 'axios';
import {useState} from 'react';
export const api = axios
  .get('https://reqres.in/api/users?page=1')
  .then(function(response) {
    return response.data; //console.log(response.data);
  })
  .catch(function(err) {
    console.log(err);
  });
export const getUser = () => {
  return api;
};
/*export const [page, setpage] = useState(1);
export const api = axios.create({
  baseURL: 'https://reqres.in/',
  timeout: 30000,
  headers: {'X-Custom-Header': 'multipart/data'},
});
export const getUser = () => {
  return api.get(`users?${page}`);
};*/
//return api.get(`users?${data.data.data}`);
