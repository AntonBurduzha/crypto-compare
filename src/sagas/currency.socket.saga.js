import { call, put, takeEvery, select } from 'redux-saga/effects';
import * as constants from '../constants';
import { CCC } from '../utils/ccc-streamer-utilities';
import * as UnpackUtils from '../utils/unpack.cc.socket';

function* setCurrentCryptoCurrencyState({ msg }) {
  const { VOLUME24HOUR, VOLUME24HOURTO, PRICE } = yield select(state => state.app.currency.data);
  const messageType = msg.substring(0, msg.indexOf("~"));
  let state = {};
  if (messageType === CCC.STATIC.TYPE.CURRENTAGG) {
    state = yield call(UnpackUtils.dataUnpack, msg);
  } else if (messageType === CCC.STATIC.TYPE.FULLVOLUME) {
    state = yield call(UnpackUtils.decorateWithFullVolume, msg, { VOLUME24HOUR, VOLUME24HOURTO, PRICE });
  }
  yield put({ type: constants.SET_CURRENT_CC_STATE, state });
}

export function* getCurrentCryptoCurrencyState() {
  yield takeEvery(constants.GET_CURRENT_CC_STATE, setCurrentCryptoCurrencyState);
}
