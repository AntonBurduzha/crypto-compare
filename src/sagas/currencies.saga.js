// @flow
import { call, put, takeEvery, select } from 'redux-saga/effects';
import { notification } from 'antd';
import type { Saga } from 'redux-saga';
import { PAGE_SIZE } from '../constants';
import * as actions from '../actions';
import Api from '../api';
import type { Currency, Currencies } from '../types/entities';
import { values } from '../utils/flow.utils';
import { ccFullListSelector } from '../selectors';

export function* fetchCurrencies(): Saga<void> {
  try {
    const list: Currencies = yield call(Api.getCryptoCurrenciesList);
    yield put(actions.successCryptoCurrencies(values(list)));
  } catch (e) {
    yield put(actions.failedCryptoCurrencies());
    const errMessage = {
      message: 'Unexpected result!',
      description: 'Something went wrong. Try later or go away from this app.',
    }
    yield call(notification.error, errMessage);
  }
}

export function* fetchCurrenciesRequest(): Saga<void> {
  yield takeEvery('FETCH_CRYPTO_CURRENCIES', fetchCurrencies);
}

export function* updateCurrenciesList({ value }: { value: string }): Saga<void> {
  const isValueMatchToListProp = (c: Currency, prop: string): boolean => {
    return c[prop].toLowerCase().includes(value.toLowerCase());
  };

  const fullList: Array<Currency> = yield select(ccFullListSelector);

  const filteredList: Array<Currency> = fullList.filter((cc: Currency): boolean => {
      return isValueMatchToListProp(cc, 'CoinName') || isValueMatchToListProp(cc, 'Name');
    });
  const pageList: Array<Currency> = filteredList.slice(0, PAGE_SIZE);

  yield put(actions.updateListByValue(filteredList, pageList));
}

export function* updateCurrenciesListBySearchValue(): Saga<void> {
  yield takeEvery('SET_SEARCH_CC_VALUE', updateCurrenciesList);
}
