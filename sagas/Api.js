import axios from 'axios';

export const api = axios
  .get('https://reqres.in/api/users?page=1')
  .then(function(response) {
    return console.log(response);
    //response.data.email;
  })
  .catch(function(err) {
    console.log(err);
  });
export const getUser = () => {
  return api;
};
/*export const api = axios.create({
  baseURL: 'https://reqres.in/',
  timeout: 30000,
  headers: {'X-Requested-With': 'XMLHttpRequest'},
});
export const getUser = () => {
  return api.get('users/page=1');
};*/
//return api.get(`users?${data.data.data}`);
