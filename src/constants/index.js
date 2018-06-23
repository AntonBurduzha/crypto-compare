// api constants
export const CRYPRO_COMPARE_NEW_API = 'https://min-api.cryptocompare.com';
export const CRYPRO_COMPARE_OLD_API = 'https://www.cryptocompare.com';
export const CRYPTO_COMPARE_WEB_SOCKET_CHANNEL = 'https://streamer.cryptocompare.com/';

// components constants
export const PAGE_SIZE = 32;

// actions constants
export const FETCH_CRYPTO_CURRENCIES = 'FETCH_CRYPTO_CURRENCIES';
export const SUCCESS_CRYPTO_CURRENCIES = 'SUCCESS_CRYPTO_CURRENCIES';
export const FAILED_CRYPTO_CURRENCIES = 'FAILED_CRYPTO_CURRENCIES';

export const SET_NEXT_PAGE = 'SET_NEXT_PAGE';
export const GET_NEXT_PAGE = 'GET_NEXT_PAGE';

export const SET_NEXT_TAB = 'SET_NEXT_TAB';

export const GET_CURRENT_CC_STATE = 'GET_CURRENT_CC_STATE';
export const SET_CURRENT_CC_STATE = 'SET_CURRENT_CC_STATE';
export const RESET_CC_DATA = 'RESET_CC_DATA';

export const NAV_TABS = Object.freeze({
  LIST: 'list',
  MARKET_BTC: 'marketBTC',
  MARKET_ETH: 'marketETH'
});

export const CURRENCIES = Object.freeze({
  USD: 'USD',
  BTC: 'BTC',
  ETH: 'ETH'
});

//Format: {SubscriptionId}~{ExchangeName}~{FromSymbol}~{ToSymbol}
//Use SubscriptionId 0 for TRADE, 2 for CURRENT, 5 for CURRENTAGG eg use key '5~CCCAGG~BTC~USD' to get aggregated data from the CCCAGG exchange 
//Full Volume Format: 11~{FromSymbol} eg use '11~BTC' to get the full volume of BTC against all coin pairs
//For aggregate quote updates use CCCAGG ags market
export const SIGNATURES = Object.freeze({
  BTC_F: '5~CCCAGG~BTC~USD',
  BTC_FV: '11~BTC',
  ETH_F: '5~CCCAGG~ETH~USD',
  ETH_FV: '11~ETH',
  USD_FV: '11~USD',
});
