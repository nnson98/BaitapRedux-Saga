import {call, all} from 'redux-saga/effects';
import {watchFetchUser} from './userSagas';

export default function* rootSaGa() {
  yield call(watchFetchUser);
}
