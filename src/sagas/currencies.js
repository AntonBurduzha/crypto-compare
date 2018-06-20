import { call, put, takeEvery } from 'redux-saga/effects'
import * as constants from '../constants';
import { notification } from 'antd';
import { getCryptoCurrenciesList } from '../api';

function* fetchCurrencies() {
   try {
      const { Data: list } = yield call(getCryptoCurrenciesList);
      yield put({ type: constants.SUCCESS_CRYPTO_CURRENCIES, list });
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
