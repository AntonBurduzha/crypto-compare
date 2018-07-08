import currenciesReducer, { initState } from '../currencies';
import * as actions from '../../actions';

describe('currenciesReducer', () => {
  it('should return the initial state', () => {
    expect(currenciesReducer(undefined, {})).toEqual(initState);
  });

  it('should handle FETCH_CRYPTO_CURRENCIES', () => {
    const expectedState = { ...initState, ...{ fetching: true } };
    expect(currenciesReducer(initState, actions.fetchCryptoCurrencies())).toEqual(expectedState);
  });

  it('should handle SUCCESS_CRYPTO_CURRENCIES', () => {
    const list = [1, 2, 3];
    const actualState = { ...initState, ...{ fetching: true } };
    const expectedState = { ...initState, ...{ fetching: false, fullList: list, pageList: list.slice(0, 32) } };
    expect(currenciesReducer(actualState, actions.successCryptoCurrencies(list))).toEqual(expectedState);
  });

  it('should handle FAILED_CRYPTO_CURRENCIES', () => {
    const actualState = { ...initState, ...{ fetching: true } };
    const expectedState = { ...initState, ...{ fetching: false, error: true } };
    expect(currenciesReducer(actualState, actions.failedCryptoCurrencies())).toEqual(expectedState);
  });

  it('should handle GET_NEXT_PAGE', () => {
    const index = 2;
    const expectedState = { ...initState, ...{ page: index } };
    expect(currenciesReducer(initState, actions.getNextPage(index))).toEqual(expectedState);
  });

  it('should handle SET_SEARCH_CC_VALUE', () => {
    const value = 'BTC';
    const expectedState = { ...initState, ...{ searchedKey: value } };
    expect(currenciesReducer(initState, actions.searchCryptoCurrencies(value))).toEqual(expectedState);
  });

  it('should handle UPDATE_LIST_BY_SEARCH_VALUE', () => {
    const pageList = [1, 2, 3];
    const filteredList = [1, 2, 3];
    const expectedState = { ...initState, ...{ pageList, filteredList } };
    expect(currenciesReducer(initState, actions.updateListByValue(pageList, filteredList))).toEqual(expectedState);
  });
});
