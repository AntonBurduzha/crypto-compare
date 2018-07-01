// @flow
import type { NavTabs, Currencies, Signatures } from '../types/constants';

// api constants
export const CRYPRO_COMPARE_NEW_API: string = 'https://min-api.cryptocompare.com';
export const CRYPRO_COMPARE_OLD_API: string = 'https://www.cryptocompare.com';
export const CRYPTO_COMPARE_WEB_SOCKET_CHANNEL: string = 'https://streamer.cryptocompare.com/';

// components constants
export const PAGE_SIZE: number = 32;

// actions constants
export const FETCH_CRYPTO_CURRENCIES: string = 'FETCH_CRYPTO_CURRENCIES';
export const SUCCESS_CRYPTO_CURRENCIES: string = 'SUCCESS_CRYPTO_CURRENCIES';
export const FAILED_CRYPTO_CURRENCIES: string = 'FAILED_CRYPTO_CURRENCIES';

export const SET_NEXT_PAGE: string = 'SET_NEXT_PAGE';
export const GET_NEXT_PAGE: string = 'GET_NEXT_PAGE';

export const SET_SEARCH_CC_VALUE: string = 'SET_SEARCH_CC_VALUE';
export const UPDATE_LIST_BY_SEARCH_VALUE: string = 'UPDATE_LIST_BY_SEARCH_VALUE';

export const SET_NEXT_TAB: string = 'SET_NEXT_TAB';

export const GET_CURRENT_CC_STATE: string = 'GET_CURRENT_CC_STATE';
export const SET_CURRENT_CC_STATE: string = 'SET_CURRENT_CC_STATE';
export const RESET_CC_DATA: string = 'RESET_CC_DATA';

export const SET_CHART_DATA: string = 'SET_CHART_DATA';
export const RESET_CHART_DATA: string = 'RESET_CHART_DATA';

export const NAV_TABS: NavTabs = Object.freeze({
  LIST: 'list',
  MARKET_BTC: 'marketBTC',
  MARKET_ETH: 'marketETH'
});

export const CURRENCIES: Currencies = Object.freeze({
  USD: 'USD',
  BTC: 'BTC',
  ETH: 'ETH'
});

//Format: {SubscriptionId}~{ExchangeName}~{FromSymbol}~{ToSymbol}
//Use SubscriptionId 0 for TRADE, 2 for CURRENT, 5 for CURRENTAGG eg use key '5~CCCAGG~BTC~USD' to get aggregated data from the CCCAGG exchange 
//Full Volume Format: 11~{FromSymbol} eg use '11~BTC' to get the full volume of BTC against all coin pairs
//For aggregate quote updates use CCCAGG ags market
export const SIGNATURES: Signatures = Object.freeze({
  BTC_F: '5~CCCAGG~BTC~USD',
  BTC_FV: '11~BTC',
  ETH_F: '5~CCCAGG~ETH~USD',
  ETH_FV: '11~ETH',
  USD_FV: '11~USD',
});
