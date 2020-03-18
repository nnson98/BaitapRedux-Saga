import {
  ADD_USER,
  FETCH_USERS,
  FETCH_SUCCEEDED,
  FETCH_FAILED,
} from './actionType';
export const fetchUsersAction = sort => {
  return {
    type: FETCH_USERS,
    sort,
  };
};
export const addUserAction = newUser => {
  return {
    type: ADD_USER,
    newUser,
  };
};
export const fetchSuccessAction = receivedUsers => {
  return {
    type: FETCH_SUCCEEDED,
    receivedUsers,
  };
};
export const fetchFailedAction = error => {
  return {
    type: FETCH_FAILED,
    error,
  };
};
