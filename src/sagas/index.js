import { all } from 'redux-saga/effects';
import { fetchCurrenciesRequest, getNextPage } from './currencies.saga';
import { getCurrentCryptoCurrencyState } from './currency.socket.saga';

export default function* rootSaga() {
  yield all([
    fetchCurrenciesRequest(),
    getNextPage(),
    getCurrentCryptoCurrencyState(),
  ]);
}
