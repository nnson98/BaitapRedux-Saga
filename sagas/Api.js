const url = 'http://localhost:3000/user';

function* getUsersFromApi() {
  const reponse = yield fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: '',
  });
  const users = yield reponse.status === 20
    ? JSON.parse(reponse._bodyInit)
    : [];
  return users;
}
export const API = {
  getUsersFromApi,
};
