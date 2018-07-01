import { call, put, takeEvery, select } from 'redux-saga/effects';
import moment from 'moment';
import * as constants from '../constants';
import * as actions from '../actions';
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
  yield put(actions.setCurrentCryptoCurrency(state));
  yield call(updateChartData);
}

function* updateChartData() {
  const { data: { PRICE, TIMESTAMP }, chartData } = yield select(state => state.app.currency);
  if (chartData.length < 10) {
    const list = [...chartData, ...[{ PRICE: parseFloat(PRICE.slice(2).replace(',', '')), TIMESTAMP}]];
    yield put(actions.setChartData(list));
  } else {
    const list = [...chartData.slice(1), ...[{ PRICE: parseFloat(PRICE.slice(2).replace(',', '')), TIMESTAMP}]];
    yield put(actions.setChartData(list));
  }
}

export function* getCurrentCryptoCurrencyState() {
  yield takeEvery(constants.GET_CURRENT_CC_STATE, setCurrentCryptoCurrencyState);
}
