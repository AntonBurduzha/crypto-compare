import { call, put, takeEvery, select } from 'redux-saga/effects'
import * as constants from '../constants';
import { notification } from 'antd';
import { getCryptoCurrenciesList } from '../api';

function* fetchCurrencies() {
   try {
      const { Data: list } = yield call(getCryptoCurrenciesList);
      yield put({ type: constants.SUCCESS_CRYPTO_CURRENCIES, list: Object.values(list) });
   } catch (e) {
      yield put({ type: constants.FAILED_CRYPTO_CURRENCIES });
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
  const fullList = yield select(state => state.app.currencies.fullList);
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
  yield put({ type: constants.SET_NEXT_PAGE, pageList, index });
}

export function* getNextPage() {
 yield takeEvery(constants.GET_NEXT_PAGE, setNextPage);
}
