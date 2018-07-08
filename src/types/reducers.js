// @flow
import type {
  CurrencySocketState,
  CurrencyChartItem,
  Currency,
} from './entities';

export type NavState = {
  +tab: string,
};

export type CurrencyState = {
  +data: CurrencySocketState,
  +chartData: Array<CurrencyChartItem>,
};

export type CurrenciesState = {
  +fetching: boolean,
  +error: boolean,
  +fullList: Array<Currency>,
  +filteredList: Array<Currency>,
  +pageList: Array<Currency>,
  +page: number,
  +searchedKey: string,
};

export type StoreState = {
  +app: {
    +currencies: CurrenciesState,
    +currency: CurrencyState,
    +navigation: NavState,
  },
};
