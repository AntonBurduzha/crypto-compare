import {
  ccFullListSelector,
  ccDataSelector,
  getCurrentPageIndex,
  getFullCCList,
} from '../index';

describe('Selectors', () => {
  const state = {
    app: {
      currencies: { fullList: [1, 2, 3], page: 8, filteredList: [1, 2] },
      currency: { BTC: '7200$' }
    }
  }

  it('ccFullListSelector should return currencies fullList', () => {
    const mockedList = [1, 2, 3];
    expect(ccFullListSelector(state)).toEqual(mockedList);
  });

  it('ccDataSelector should return currency data', () => {
    const mockedCurrency = { BTC: '7200$' };
    expect(ccDataSelector(state)).toEqual(mockedCurrency);
  });

  it('getCurrentPageIndex should return currencies page index', () => {
    const mockedIndex = 8;
    expect(getCurrentPageIndex(state)).toEqual(mockedIndex);
  });

  it('getFullCCList should return currencies fullList', () => {
    const mockedList = [1, 2, 3];
    const updatedState = {
      ...state,
      app: {
        ...state.app,
        currencies: { ...state.app.currencies, ...{ searchedKey: '' } }
      }
    };
    expect(getFullCCList(updatedState)).toEqual(mockedList);
  });

  it('getFullCCList should return currencies fullList', () => {
    const mockedList = [1, 2];
    const updatedState = {
      ...state,
      app: {
        ...state.app,
        currencies: { ...state.app.currencies, ...{ searchedKey: '2' } }
      }
    };
    expect(getFullCCList(updatedState)).toEqual(mockedList);
  });
});
