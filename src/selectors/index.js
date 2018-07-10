// @flow
import { createSelectorCreator } from 'reselect';
import { PAGE_SIZE } from '../constants';
import type { StoreState } from '../types/reducers';
import type { Currency } from '../types/entities';
import memoize from '../utils/memoize';

const customSelectorCreator = createSelectorCreator(memoize);

const getFullCCList = (state: StoreState): Array<Currency> => {
  const {
    searchedKey,
    filteredList,
    fullList,
  }: {
    +searchedKey: string,
    +filteredList: Array<Currency>,
    +fullList: Array<Currency>,
  } = state.app.currencies;
  return searchedKey ? filteredList : fullList;
};

const getCurrentPageIndex = (state: StoreState): number =>
  state.app.currencies.page;

export const currentPageListSelector = customSelectorCreator(
  getFullCCList,
  getCurrentPageIndex,
  (list: Array<Currency>, index: number): Array<Currency> => {
    const isLastPage: boolean = Math.ceil(list.length / PAGE_SIZE) === index;
    let pageList: Array<Currency> = [];

    if (index === 1) {
      pageList = list.slice(0, PAGE_SIZE);
    } else if (isLastPage) {
      pageList = list.slice(index * PAGE_SIZE - PAGE_SIZE);
    } else {
      const endIndex: number = index * PAGE_SIZE;
      const startIndex: number = endIndex - PAGE_SIZE;
      pageList = list.slice(startIndex, endIndex);
    }
    return pageList;
  }
);

export const ccFullListSelector = (state: StoreState): Array<Currency> => state.app.currencies.fullList;

export const ccDataSelector = (state: StoreState): mixed => state.app.currency;
