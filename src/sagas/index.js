import { all } from 'redux-saga/effects'
import { fetchCurrenciesRequest, getNextPage } from './currencies';

export default function* rootSaga() {
  yield all([
    fetchCurrenciesRequest(),
    getNextPage()
  ]);
};
