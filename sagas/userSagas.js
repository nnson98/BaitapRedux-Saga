import {FETCH_USER, FETCH_SUCCEEDED, FETCH_FAILD} from '../actions/actionTypes';
import {put, takeLatest} from 'redux-saga/effects';
import {Api} from './Api';
function* fetchUsers() {
  try {
    const receivedUsers = yield Api.getUsersFromApi();
    yield put({type: FETCH_SUCCEEDED, receivedUsers: receivedUsers});
  } catch (error) {
    yield put({type: FETCH_FAILD, error});
  }
}
export function* wacthFetchMovies() {
  yield takeLatest(FETCH_USER, fetchUsers);
}
