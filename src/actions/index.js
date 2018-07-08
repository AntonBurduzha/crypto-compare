// @flow
import type { Action } from '../types/actions';
import type {
  Currency,
  CurrencyChartItem,
  CurrencySocketState,
} from '../types/entities';

export const fetchCryptoCurrencies = (): Action => {
  return { type: 'FETCH_CRYPTO_CURRENCIES' };
};

export const successCryptoCurrencies = (list: Array<Currency>): Action => {
  return { type: 'SUCCESS_CRYPTO_CURRENCIES', list };
};

export const failedCryptoCurrencies = (): Action => {
  return { type: 'FAILED_CRYPTO_CURRENCIES' };
};

export const getNextPage = (index: number): Action => {
  return { type: 'GET_NEXT_PAGE', index };
};

export const updateListByValue = (
  filteredList: Array<Currency>,
  pageList: Array<Currency>
): Action => {
  return { type: 'UPDATE_LIST_BY_SEARCH_VALUE', filteredList, pageList };
};

export const getNextTab = (tab: string): Action => {
  return { type: 'SET_NEXT_TAB', tab };
};

export const getCurrentCryptoCurrency = (msg: string): Action => {
  return { type: 'GET_CURRENT_CC_STATE', msg };
};

export const setCurrentCryptoCurrency = (
  state: CurrencySocketState
): Action => {
  return { type: 'SET_CURRENT_CC_STATE', state };
};

export const setChartData = (list: Array<CurrencyChartItem>): Action => {
  return { type: 'SET_CHART_DATA', list };
};

export const resetChartData = (): Action => {
  return { type: 'RESET_CHART_DATA' };
};

export const resetCCData = (): Action => {
  return { type: 'RESET_CC_DATA' };
};

export const searchCryptoCurrencies = (value: string): Action => {
  return { type: 'SET_SEARCH_CC_VALUE', value };
};
