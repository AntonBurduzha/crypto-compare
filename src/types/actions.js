// @flow
import * as types from '../constants';
import type { Currency, CurrencyChartItem, CurrencySocketState } from './entities';

export type FetchCryptoCurrencies = { type: string };

export type SuccessCryptoCurrencies = { type: string, list: Array<Currency> };

export type FailedCryptoCurrencies = { type: string };

export type GetNextPage = { type: string, index: number };

export type SetNextPage = { type: string, pageList: Array<Currency>, index: number };

export type UpdateListByValue = { type: string, filteredList: Array<Currency>, pageList: Array<Currency> };

export type GetNextTab = { type: string, tab: string };

export type GetCurrentCryptoCurrency = { type: string, msg: string };

export type SetCurrentCryptoCurrency = { type: string, state: CurrencySocketState };

export type SetChartData = { type: string, list: Array<CurrencyChartItem> };

export type ResetChartData = { type: string };

export type SearchCryptoCurrencies = { type: string, value: string };

export type Action = (
  FetchCryptoCurrencies |
  SuccessCryptoCurrencies |
  FailedCryptoCurrencies |
  GetNextPage |
  SetNextPage |
  UpdateListByValue |
  GetNextTab |
  GetCurrentCryptoCurrency |
  SetCurrentCryptoCurrency |
  SetChartData |
  ResetChartData |
  SearchCryptoCurrencies
);
