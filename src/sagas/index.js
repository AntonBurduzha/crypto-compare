// @flow
import { all } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import { fetchCurrenciesRequest, updateCurrenciesListBySearchValue } from './currencies.saga';
import { getCurrentCryptoCurrencyState } from './currency.socket.saga';

export default function* rootSaga(): Saga<void> {
  yield all([
    fetchCurrenciesRequest(),
    getCurrentCryptoCurrencyState(),
    updateCurrenciesListBySearchValue(),
  ]);
}
