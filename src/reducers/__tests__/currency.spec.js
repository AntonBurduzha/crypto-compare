import currencyReducer, { initState } from '../currency';
import * as actions from '../../actions';

describe('currencyReducer', () => {
  it('should return the initial state', () => {
    expect(currencyReducer(undefined, {})).toEqual(initState);
  });

  it('should handle SET_CURRENT_CC_STATE', () => {
    const state = { FLAGS: 2, FULLVOLUMEFROM: '1,000,000', FULLVOLUMETO: '2,000,000' }
    const expectedState = { ...initState, data: { ...initState.data, ...state } };
    expect(currencyReducer(initState, actions.setCurrentCryptoCurrency(state))).toEqual(expectedState);
  });

  it('should handle RESET_CC_DATA', () => {
    const actualState = { chartData: [1, 2, 3], data: { age: 23 } };
    const expectedState = { chartData: [1, 2, 3], data: { ...initState.data } };
    expect(currencyReducer(actualState, actions.resetCCData())).toEqual(expectedState);
  });

  it('should handle SET_CHART_DATA', () => {
    const chartData = [1, 2, 3];
    const expectedState = { ...initState, chartData };
    expect(currencyReducer(undefined, actions.setChartData(chartData))).toEqual(expectedState);
  });

  it('should handle RESET_CHART_DATA', () => {
    const actualState = { chartData: [1, 2, 3], data: { age: 23 } };
    const expectedState = { data: { age: 23 }, chartData: [] };
    expect(currencyReducer(actualState, actions.resetChartData())).toEqual(expectedState);
  });
});
