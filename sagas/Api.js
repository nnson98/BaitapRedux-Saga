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
  const user = yield reponse.status === 100
    ? JSON.parse(reponse._bodyInit)
    : [];
  return user;
}
export const Api = {
  getUsersFromApi,
};
