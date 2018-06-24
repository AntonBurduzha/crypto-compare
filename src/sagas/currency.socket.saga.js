import { call, put, takeEvery, select } from 'redux-saga/effects';
import moment from 'moment';
import * as constants from '../constants';
import { CCC } from '../utils/ccc-streamer-utilities';
import * as UnpackUtils from '../utils/unpack.cc.socket';

function* setCurrentCryptoCurrencyState({ msg }) {
  const messageType = msg.substring(0, msg.indexOf("~"));
  let state = {};
  if (messageType === CCC.STATIC.TYPE.CURRENTAGG) {
    state = yield call(UnpackUtils.dataUnpack, msg);
  } else if (messageType === CCC.STATIC.TYPE.FULLVOLUME) {
    state = yield call(UnpackUtils.decorateWithFullVolume, msg);
  }
  state['TIMESTAMP'] = moment().format('hh:mm:ss');
  yield put({ type: constants.SET_CURRENT_CC_STATE, state });
  yield call(updateChartData);
}

function* updateChartData() {
  const { data: { PRICE, TIMESTAMP }, chartData } = yield select(state => state.app.currency);
  if (chartData.length < 10) {
    yield put({
      type: constants.SET_CHART_DATA,
      list: [...chartData, ...[{ PRICE: parseFloat(PRICE.slice(2).replace(',', '')), TIMESTAMP}]]
    });
  } else {
    yield put({
      type: constants.SET_CHART_DATA,
      list: [...chartData.slice(1), ...[{ PRICE: parseFloat(PRICE.slice(2).replace(',', '')), TIMESTAMP}]]
    });
  }
}

export function* getCurrentCryptoCurrencyState() {
  yield takeEvery(constants.GET_CURRENT_CC_STATE, setCurrentCryptoCurrencyState);
}
