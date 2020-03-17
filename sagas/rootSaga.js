import {call, all} from 'redux-saga/effects';
import {wacthFetchMovies} from './userSagas';

export default function* rootSaga() {
  yield call(wacthFetchMovies);
}
