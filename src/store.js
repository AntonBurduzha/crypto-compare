// @flow
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ app: rootReducer }),
  applyMiddleware(logger, sagaMiddleware),
);

sagaMiddleware.run(rootSaga);
export default store;
