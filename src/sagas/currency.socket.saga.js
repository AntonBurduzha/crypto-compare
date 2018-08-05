// @flow
import { call, put, takeEvery, select } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import moment from 'moment';
import * as actions from '../actions';
import { CCC } from '../utils/ccc-streamer-utilities';
import * as UnpackUtils from '../utils/unpack.cc.socket';
import type { CurrencySocketState, CurrencyChartItem, ccDataForChart } from '../types/entities';
import { ccDataSelector } from '../selectors';

export function* setCurrentCryptoCurrencyState({ msg }: { msg: string }): Saga<void> {
  const messageType: string = msg.substring(0, msg.indexOf('~'));
  let state: CurrencySocketState | { [key: string]: any } = {};
  if (messageType === CCC.STATIC.TYPE.CURRENTAGG) {
    state = yield call(UnpackUtils.dataUnpack, msg);
  } else if (messageType === CCC.STATIC.TYPE.FULLVOLUME) {
    state = yield call(UnpackUtils.decorateWithFullVolume, msg);
  }
  state['TIMESTAMP'] = moment().format('hh:mm:ss');
  yield put(actions.setCurrentCryptoCurrency(state));
  yield call(updateChartData);
}

export function* updateChartData(): Saga<void> {
  const ccChartData: ccDataForChart = yield select(ccDataSelector);

  if (ccChartData.chartData.length < 10) {
    const list: Array<CurrencyChartItem> = [
      ...ccChartData.chartData,
      ...[{
        PRICE: parseFloat(ccChartData.data.PRICE.slice(2).replace(',', '')),
        TIMESTAMP: ccChartData.data.TIMESTAMP
      }]
    ];
    yield put(actions.setChartData(list));
  } else {
    const list: Array<CurrencyChartItem> = [
      ...ccChartData.chartData.slice(1),
      ...[{
        PRICE: parseFloat(ccChartData.data.PRICE.slice(2).replace(',', '')),
        TIMESTAMP: ccChartData.data.TIMESTAMP
      }]
    ];
    yield put(actions.setChartData(list));
  }
}

export function* getCurrentCryptoCurrencyState(): Saga<void> {
  yield takeEvery('GET_CURRENT_CC_STATE', setCurrentCryptoCurrencyState);
}
