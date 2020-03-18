import {
  FETCH_USERS,
  FETCH_SUCCEEDED,
  FETCH_FAILED,
} from '../actions/actionType';
import {put, takeLatest} from 'redux-saga/effects';
import {API} from './api';
function* fetchUsers() {
  try {
    const receivedUsers = yield API.getUsersFromApi();
    yield put({type: FETCH_SUCCEEDED, receivedUsers: receivedUsers});
  } catch (error) {
    yield put({type: FETCH_FAILED, error});
  }
}
export function* watchFetchUser() {
  yield takeLatest(FETCH_USERS, fetchUsers);
}
