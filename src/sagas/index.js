import { all } from 'redux-saga/effects'
import { fetchCurrenciesRequest } from './currencies';

export default function* rootSaga() {
  yield all([
    fetchCurrenciesRequest()
  ]);
};
