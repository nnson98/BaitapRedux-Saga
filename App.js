import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import allReduces from './reducers/index';
import Home from './components/user';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReduces, applyMiddleware(sagaMiddleware));
export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

sagaMiddleware.run(rootSaga);
