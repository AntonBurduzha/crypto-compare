import { call, put, takeEvery, select } from 'redux-saga/effects';
import * as actions from'../../actions';
import {
  getCurrentCryptoCurrencyState,
  setCurrentCryptoCurrencyState,
  updateChartData,
} from '../../sagas/currency.socket.saga';
import * as UnpackUtils from '../../utils/unpack.cc.socket';
import { ccDataSelector } from '../../selectors';

describe('setCurrentCryptoCurrencyState saga with 5 socket status', () => {
  it('should call util for unpacking socket data', () => {
    const msg = '5~BTC~614188.0988893233';
    const generator = setCurrentCryptoCurrencyState({ msg });
    const state = { TIMESTAMP: 'today' };
    const callDescriptor = generator.next().value;
    expect(callDescriptor).toEqual(call(UnpackUtils.dataUnpack, msg));

    const putDescriptor = generator.next(state).value;
    expect(putDescriptor).toEqual(put(actions.setCurrentCryptoCurrency(state)));
    expect(state).toHaveProperty('TIMESTAMP');

    const callNextGenDescriptor = generator.next().value;
    expect(callNextGenDescriptor).toEqual(call(updateChartData));
  });
});

describe('setCurrentCryptoCurrencyState saga with 11 socket status', () => {
  it('should decorate cc state with full volume data', () => {
    const msg = '11~BTC~614188.0988893233';
    const generator = setCurrentCryptoCurrencyState({ msg });
    const state = { TIMESTAMP: 'today' };
    const callDescriptor = generator.next().value;
    expect(callDescriptor).toEqual(call(UnpackUtils.decorateWithFullVolume, msg));

    const putDescriptor = generator.next(state).value;
    expect(putDescriptor).toEqual(put(actions.setCurrentCryptoCurrency(state)));
    expect(state).toHaveProperty('TIMESTAMP');

    const callNextGenDescriptor = generator.next().value;
    expect(callNextGenDescriptor).toEqual(call(updateChartData));
  });
});

describe('updateChartData helper generator with empty chart data list', () => {
  const generator = updateChartData();
  it('should select cc data from store and create chart data list', () => {
    const selectDescriptor = generator.next().value;
    expect(selectDescriptor).toEqual(select(ccDataSelector));

    const ccChartData = { data: { TIMESTAMP: 'today', PRICE: '$ 6,372.93' }, chartData: [] };
    const putDescriptor = generator.next(ccChartData).value;
    const chartData = [{ TIMESTAMP: 'today', PRICE: 6372.93 }]
    expect(putDescriptor).toEqual(put(actions.setChartData(chartData)));
  });
});

describe('updateChartData helper generator with full chart data list', () => {
  const generator = updateChartData();
  it('should select cc data from store and create chart data list', () => {
    const selectDescriptor = generator.next().value;
    expect(selectDescriptor).toEqual(select(ccDataSelector));

    const ccChartData = {
      data: { TIMESTAMP: 'today', PRICE: '$ 6,372.93' },
      chartData: [0,1,2,3,4,5,6,7,8,9],
    };
    const putDescriptor = generator.next(ccChartData).value;
    const chartData = [{ TIMESTAMP: 'today', PRICE: 6372.93 }]
    const updatedChart = [...ccChartData.chartData.slice(1), ...chartData];
    expect(putDescriptor).toEqual(put(actions.setChartData(updatedChart)));
  });
});

describe('getCurrentCryptoCurrencyState saga', () => {
  const generator = getCurrentCryptoCurrencyState();
  it('should start task to watch for GET_CURRENT_CC_STATE action', () => {
    const takeEveryDescriptor = generator.next().value;
    expect(takeEveryDescriptor).toEqual(takeEvery('GET_CURRENT_CC_STATE', setCurrentCryptoCurrencyState));
  });
});
