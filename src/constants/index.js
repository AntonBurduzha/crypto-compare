// api constants
export const CRYPRO_COMPARE_NEW_API = 'https://min-api.cryptocompare.com';
export const CRYPRO_COMPARE_OLD_API = 'https://www.cryptocompare.com';

// components constants
export const PAGE_SIZE = 32;

// actions constants
export const FETCH_CRYPTO_CURRENCIES = 'FETCH_CRYPTO_CURRENCIES';
export const SUCCESS_CRYPTO_CURRENCIES = 'SUCCESS_CRYPTO_CURRENCIES';
export const FAILED_CRYPTO_CURRENCIES = 'FAILED_CRYPTO_CURRENCIES';

export const SET_NEXT_PAGE = 'SET_NEXT_PAGE';
export const GET_NEXT_PAGE = 'GET_NEXT_PAGE';

export const SET_NEXT_TAB = 'SET_NEXT_TAB';

export const NAV_TABS = Object.freeze({
  LIST: 'list',
  MARKET_BTC: 'marketBTC',
  MARKET_ETH: 'marketETH'
});
