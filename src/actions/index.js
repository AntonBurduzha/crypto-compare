// @flow
import * as types from '../constants';
import type { Action } from '../types/actions';
import type { Currency, CurrencyChartItem, CurrencySocketState } from '../types/entities';

export const fetchCryptoCurrencies = (): Action => {
  return { type: types.FETCH_CRYPTO_CURRENCIES };
};

export const successCryptoCurrencies = (list: Array<Currency>): Action => {
  return { type: types.SUCCESS_CRYPTO_CURRENCIES, list };
};

export const failedCryptoCurrencies = (): Action => {
  return { type: types.FAILED_CRYPTO_CURRENCIES };
};

export const getNextPage = (index: number): Action => {
  return { type: types.GET_NEXT_PAGE, index };
};

export const setNextPage = (pageList: Array<Currency>, index: number): Action => {
  return { type: types.SET_NEXT_PAGE, pageList, index };
};

export const updateListByValue = (filteredList: Array<Currency>, pageList: Array<Currency>): Action => {
  return {
    type: types.UPDATE_LIST_BY_SEARCH_VALUE,
    filteredList,
    pageList
  };
};

export const getNextTab = (tab: string): Action => {
  return { type: types.SET_NEXT_TAB, tab };
};

export const getCurrentCryptoCurrency = (msg: string): Action => {
  return { type: types.GET_CURRENT_CC_STATE, msg };
};

export const setCurrentCryptoCurrency = (state: CurrencySocketState): Action => {
  return { type: types.SET_CURRENT_CC_STATE, state };
};

export const setChartData = (list: Array<CurrencyChartItem>): Action => {
  return { type: types.SET_CHART_DATA, list };
};

export const resetChartData = (): Action => {
  return { type: types.RESET_CHART_DATA };
};

export const searchCryptoCurrencies = (value: string): Action => {
  return { type: types.SET_SEARCH_CC_VALUE, value };
};
