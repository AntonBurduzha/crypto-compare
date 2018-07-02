// @flow
import { call, put, takeEvery, select } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import moment from 'moment';
import * as actions from '../actions';
import { CCC } from '../utils/ccc-streamer-utilities';
import * as UnpackUtils from '../utils/unpack.cc.socket';
import type { CurrencySocketState, CurrencyChartItem } from '../types/entities';
import type { StoreState } from '../types/reducers';

function* setCurrentCryptoCurrencyState({ msg }: { msg: string }): Saga<void> {
  const messageType: string = msg.substring(0, msg.indexOf("~"));
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

function* updateChartData(): Saga<void> {
  const {
    data,
    chartData
  } : {
    data: CurrencySocketState,
    chartData: Array<CurrencyChartItem>
  } = yield select((state: StoreState): mixed => state.app.currency);

  if (chartData.length < 10) {
    const list: Array<CurrencyChartItem> = [
      ...chartData,
      ...[{ PRICE: parseFloat(data.PRICE.slice(2).replace(',', '')), TIMESTAMP: data.TIMESTAMP }]
    ];
    yield put(actions.setChartData(list));
  } else {
    const list: Array<CurrencyChartItem> = [
      ...chartData.slice(1),
      ...[{ PRICE: parseFloat(data.PRICE.slice(2).replace(',', '')), TIMESTAMP: data.TIMESTAMP }]
    ];
    yield put(actions.setChartData(list));
  }
}

export function* getCurrentCryptoCurrencyState(): Saga<void> {
  yield takeEvery('GET_CURRENT_CC_STATE', setCurrentCryptoCurrencyState);
}
