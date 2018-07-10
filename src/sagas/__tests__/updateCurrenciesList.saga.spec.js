import { select, put, takeEvery } from 'redux-saga/effects';
import * as actions from'../../actions';
import { updateCurrenciesList, updateCurrenciesListBySearchValue } from '../../sagas/currencies.saga';

describe('updateCurrenciesList saga', () => {
  const generator = updateCurrenciesList({ value: 'ddd' });
  it('should dispatch the updateListByValue action with updated entity lists', () => {
    const fullList = [
      { CoinName: 's', Name: 'ddd' },
      { CoinName: 'fg', Name: 'ddd1dfds' },
      { CoinName: 'f', Name: 'dd2fsdfew' },
    ];
    const selectDescriptor = generator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const filteredList = [{ CoinName: 's', Name: 'ddd' }, { CoinName: 'fg', Name: 'ddd1dfds' }];
    const pageList = filteredList.slice(0, 32);
    const putDescriptor = generator.next(fullList).value;
    expect(fullList).toBeDefined();
    expect(filteredList).toHaveLength(2);
    expect(fullList).toEqual(expect.arrayContaining(filteredList));
    expect(fullList).toEqual(expect.arrayContaining(pageList));
    expect(filteredList).toEqual(expect.arrayContaining(pageList));
    expect(pageList).toHaveLength(2);

    expect(putDescriptor).toEqual(put(actions.updateListByValue(filteredList, pageList)));
  });
});

describe('updateCurrenciesListBySearchValue saga', () => {
  const generator = updateCurrenciesListBySearchValue();
  it('should start task to watch for SET_SEARCH_CC_VALUE action', () => {
    const takeEveryDescriptor = generator.next().value;
    expect(takeEveryDescriptor).toEqual(takeEvery('SET_SEARCH_CC_VALUE', updateCurrenciesList));
  });
});
