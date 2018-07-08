// @flow
import type {
  Currency,
  CurrencyChartItem,
  CurrencySocketState,
} from './entities';

export type FetchCryptoCurrencies = { type: 'FETCH_CRYPTO_CURRENCIES' };

export type SuccessCryptoCurrencies = {
  type: 'SUCCESS_CRYPTO_CURRENCIES',
  list: Array<Currency>,
};

export type FailedCryptoCurrencies = { type: 'FAILED_CRYPTO_CURRENCIES' };

export type GetNextPage = { type: 'GET_NEXT_PAGE', index: number };

export type UpdateListByValue = {
  type: 'UPDATE_LIST_BY_SEARCH_VALUE',
  filteredList: Array<Currency>,
  pageList: Array<Currency>,
};

export type SetNextTab = { type: 'SET_NEXT_TAB', tab: string };

export type GetCurrentCryptoCurrency = {
  type: 'GET_CURRENT_CC_STATE',
  msg: string,
};

export type SetCurrentCryptoCurrency = {
  type: 'SET_CURRENT_CC_STATE',
  state: CurrencySocketState,
};

export type SetChartData = {
  type: 'SET_CHART_DATA',
  list: Array<CurrencyChartItem>,
};

export type ResetChartData = { type: 'RESET_CHART_DATA' };

export type ResetCCData = { type: 'RESET_CC_DATA' };

export type SearchCryptoCurrencies = {
  type: 'SET_SEARCH_CC_VALUE',
  value: string,
};

export type Action =
  | FetchCryptoCurrencies
  | SuccessCryptoCurrencies
  | FailedCryptoCurrencies
  | GetNextPage
  | UpdateListByValue
  | SetNextTab
  | GetCurrentCryptoCurrency
  | SetCurrentCryptoCurrency
  | SetChartData
  | ResetChartData
  | ResetCCData
  | SearchCryptoCurrencies;
