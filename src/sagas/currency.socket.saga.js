import { call, put, takeEvery, select } from 'redux-saga/effects';
import moment from 'moment';
import Immutable from 'immutable';
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
  const currency = yield select(state => state.app.currency);
  const chartData = currency.get('chartData');
  const PRICE = parseFloat(currency.getIn(['data','PRICE']).slice(2).replace(',', ''));
  const TIMESTAMP = currency.getIn(['data','TIMESTAMP']);

  if (currency.get('chartData').size < 10) {
    yield put({
      type: constants.SET_CHART_DATA,
      list: Immutable.List(chartData.push(Immutable.Map({ PRICE, TIMESTAMP })))
    });
  } else {
    yield put({
      type: constants.SET_CHART_DATA,
      list: Immutable.List(chartData.slice(1).push(Immutable.Map({ PRICE, TIMESTAMP })))
    });
  }
}

export function* getCurrentCryptoCurrencyState() {
  yield takeEvery(constants.GET_CURRENT_CC_STATE, setCurrentCryptoCurrencyState);
}
