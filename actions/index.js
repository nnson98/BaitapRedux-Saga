import {FETCH_USER, FETCH_SUCCEEDED, FETCH_FAILD} from './actionTypes';

export const fetchUserAction = sort => {
  return {
    type: FETCH_USER,
    sort,
  };
};
export const fetchSuccessAction = receivedUsers => {
  return {
    type: FETCH_SUCCEEDED,
    receivedUsers,
  };
};
export const fetchFaildAction = error => {
  return {
    type: FETCH_SUCCEEDED,
    error,
  };
};
