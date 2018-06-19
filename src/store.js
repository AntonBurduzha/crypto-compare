import { createStore, combineReducers, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
  combineReducers({ app: rootReducer }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
export default store;
