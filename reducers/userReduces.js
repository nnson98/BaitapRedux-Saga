import {FETCH_USER, FETCH_SUCCEEDED, FETCH_FAILD} from '../actions/actionTypes';
const userReduces = (user = [], actions) => {
  switch (actions.type) {
    case FETCH_SUCCEEDED:
      return actions.receivedMovies;
    case FETCH_FAILD:
      return [];
    default:
      return user;
  }
};
export default userReduces;
