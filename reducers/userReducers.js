import {
  ADD_USER,
  FETCH_USERS,
  FETCH_SUCCEEDED,
  FETCH_FAILED,
} from '../actions/actionType';
const userReducers = (users = [], action) => {
  switch (action.type) {
    case FETCH_SUCCEEDED:
      return action.receivedUsers;
    case FETCH_FAILED:
      return [];
    case ADD_USER:
      return [...users, action.newUser];
    default:
      return users;
  }
};
export default userReducers;
