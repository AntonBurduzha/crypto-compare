import * as actions from '../index';

describe('Action Creators', () => {
  it('should check fetchCryptoCurrencies action creator', () => {
    const expectedAction = { type: 'FETCH_CRYPTO_CURRENCIES' };
    expect(actions.fetchCryptoCurrencies()).toEqual(expectedAction);
  });

  it('should check successCryptoCurrencies action creator', () => {
    const list = [1];
    const expectedAction = { type: 'SUCCESS_CRYPTO_CURRENCIES', list };
    expect(actions.successCryptoCurrencies(list)).toEqual(expectedAction);
  });

  it('should check failedCryptoCurrencies action creator', () => {
    const expectedAction = { type: 'FAILED_CRYPTO_CURRENCIES' };
    expect(actions.failedCryptoCurrencies()).toEqual(expectedAction);
  });

  it('should check getNextPage action creator', () => {
    const index = 1;
    const expectedAction = { type: 'GET_NEXT_PAGE', index };
    expect(actions.getNextPage(index)).toEqual(expectedAction);
  });

  it('should check updateListByValue action creator', () => {
    const filteredList= [1];
    const pageList = [1];
    const expectedAction = { type: 'UPDATE_LIST_BY_SEARCH_VALUE', filteredList, pageList };
    expect(actions.updateListByValue(filteredList, pageList)).toEqual(expectedAction);
  });

  it('should check getNextTab action creator', () => {
    const tab = 'awesome tab';
    const expectedAction = { type: 'SET_NEXT_TAB', tab };
    expect(actions.getNextTab(tab)).toEqual(expectedAction);
  });

  it('should check getCurrentCryptoCurrency action creator', () => {
    const msg = 'awesome message';
    const expectedAction = { type: 'GET_CURRENT_CC_STATE', msg };
    expect(actions.getCurrentCryptoCurrency(msg)).toEqual(expectedAction);
  });

  it('should check setCurrentCryptoCurrency action creator', () => {
    const state = { age: 24 };
    const expectedAction = { type: 'SET_CURRENT_CC_STATE', state };
    expect(actions.setCurrentCryptoCurrency(state)).toEqual(expectedAction);
  });

  it('should check setChartData action creator', () => {
    const list = [1];
    const expectedAction = { type: 'SET_CHART_DATA', list };
    expect(actions.setChartData(list)).toEqual(expectedAction);
  });

  it('should check resetChartData action creator', () => {
    const expectedAction = { type: 'RESET_CHART_DATA' };
    expect(actions.resetChartData()).toEqual(expectedAction);
  });

  it('should check resetCCData action creator', () => {
    const expectedAction = { type: 'RESET_CC_DATA' };
    expect(actions.resetCCData()).toEqual(expectedAction);
  });

  it('should check searchCryptoCurrencies action creator', () => {
    const value = 'searched value';
    const expectedAction = { type: 'SET_SEARCH_CC_VALUE', value };
    expect(actions.searchCryptoCurrencies(value)).toEqual(expectedAction);
  });
});
