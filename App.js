import React from 'react';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import allReduces from './reducers/index';
import UserContainer from './components/user';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReduces, applyMiddleware(sagaMiddleware));
export default function App() {
  return (
    <Provider store={store}>
      <UserContainer />
    </Provider>
  );
}

sagaMiddleware.run(rootSaga);
