import { call, put, takeEvery, select } from 'redux-saga/effects';
import { notification } from 'antd';
import * as constants from '../constants';
import * as actions from '../actions';
import Api from '../api';

function* fetchCurrencies() {
  try {
    const { Data } = yield call(Api.getCryptoCurrenciesList);
    const list = Object.values(Data);
    yield put(actions.successCryptoCurrencies(list));
  } catch (e) {
    yield put(actions.successCryptoCurrencies());
    notification.error({
      message: 'Unexpected result!',
      description: 'Something went wrong. Try later or go away from this app.',
    });
  }
}

export function* fetchCurrenciesRequest() {
  yield takeEvery(constants.FETCH_CRYPTO_CURRENCIES, fetchCurrencies);
}

function* setNextPage({ index }) {
  const fullList = yield select(state => {
    const { searchedKey, filteredList, fullList } = state.app.currencies;
    return searchedKey ? filteredList : fullList;
  });
  const isLastPage = Math.ceil(fullList.length / constants.PAGE_SIZE) === index;
  let pageList = [];

  if (index === 1) {
    pageList = fullList.slice(0, constants.PAGE_SIZE);
  } else if (isLastPage) {
    pageList = fullList.slice(((index * constants.PAGE_SIZE) - constants.PAGE_SIZE));
  } else {
    const endIndex = index * constants.PAGE_SIZE;
    const startIndex = endIndex - constants.PAGE_SIZE;
    pageList = fullList.slice(startIndex, endIndex);
  }
  yield put(actions.setNextPage(pageList, index));
}

export function* getNextPage() {
  yield takeEvery(constants.GET_NEXT_PAGE, setNextPage);
}

function* updateCurrenciesList({ value }) {
  const isValueMatchToListProp = (c, prop) => c[prop].toLowerCase().includes(value.toLowerCase());
  const fullList = yield select(state => state.app.currencies.fullList);

  const filteredList = fullList
    .filter(cc => isValueMatchToListProp(cc, 'CoinName') || isValueMatchToListProp(cc, 'Name'));
  const pageList = filteredList.slice(0, constants.PAGE_SIZE);

  yield put(actions.updateListByValue(filteredList, pageList));
}

export function* updateCurrenciesListBySearchValue() {
  yield takeEvery(constants.SET_SEARCH_CC_VALUE, updateCurrenciesList);
}
