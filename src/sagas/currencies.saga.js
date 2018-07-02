// @flow
import { call, put, takeEvery, select } from 'redux-saga/effects';
import { notification } from 'antd';
import type { Saga } from 'redux-saga';
import { PAGE_SIZE } from '../constants';
import * as actions from '../actions';
import Api from '../api';
import type { Currency, Currencies } from '../types/entities';
import type { StoreState } from '../types/reducers';
import { values } from '../utils/flow.utils';

function* fetchCurrencies(): Saga<void> {
  try {
    const { Data } : { Data: Currencies } = yield call(Api.getCryptoCurrenciesList);
    const list: Array<Currency> = values(Data);
    yield put(actions.successCryptoCurrencies(list));
  } catch (e) {
    yield put(actions.failedCryptoCurrencies());
    notification.error({
      message: 'Unexpected result!',
      description: 'Something went wrong. Try later or go away from this app.',
    });
  }
}

export function* fetchCurrenciesRequest(): Saga<void> {
  yield takeEvery('FETCH_CRYPTO_CURRENCIES', fetchCurrencies);
}

function* setNextPage({ index }: { index: number }): Saga<void> {
  const fullList: Array<Currency> = yield select((state: StoreState): Array<Currency> => {
    const {
      searchedKey,
      filteredList,
      fullList
    } : {
      +searchedKey: string,
      +filteredList: Array<Currency>,
      +fullList: Array<Currency>
    } = state.app.currencies;
    return searchedKey ? filteredList : fullList;
  });
  const isLastPage: boolean = Math.ceil(fullList.length / PAGE_SIZE) === index;
  let pageList: Array<Currency> = [];

  if (index === 1) {
    pageList = fullList.slice(0, PAGE_SIZE);
  } else if (isLastPage) {
    pageList = fullList.slice(((index * PAGE_SIZE) - PAGE_SIZE));
  } else {
    const endIndex: number = index * PAGE_SIZE;
    const startIndex: number = endIndex - PAGE_SIZE;
    pageList = fullList.slice(startIndex, endIndex);
  }
  yield put(actions.setNextPage(pageList, index));
}

export function* getNextPage(): Saga<void> {
  yield takeEvery('GET_NEXT_PAGE', setNextPage);
}

function* updateCurrenciesList({ value }: { value: string }): Saga<void> {
  const isValueMatchToListProp = (c: Currency, prop: string): boolean => {
    return c[prop].toLowerCase().includes(value.toLowerCase());
  }
  const fullList: Array<Currency> = yield select((state: StoreState): Array<Currency> => state.app.currencies.fullList);

  const filteredList: Array<Currency> = fullList.filter((cc: Currency): boolean => {
      return isValueMatchToListProp(cc, 'CoinName') || isValueMatchToListProp(cc, 'Name');
    });
  const pageList: Array<Currency> = filteredList.slice(0, PAGE_SIZE);

  yield put(actions.updateListByValue(filteredList, pageList));
}

export function* updateCurrenciesListBySearchValue(): Saga<void> {
  yield takeEvery('SET_SEARCH_CC_VALUE', updateCurrenciesList);
}
