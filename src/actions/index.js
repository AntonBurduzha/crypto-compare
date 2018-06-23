import * as types from '../constants';

export const fetchCryptoCurrencies = () => ({ type: types.FETCH_CRYPTO_CURRENCIES });

export const getNextPage = index => ({ type: types.GET_NEXT_PAGE, index });

export const getNextTab = tab => ({ type: types.SET_NEXT_TAB, tab });

export const getCurrentCryptoCurrency = msg => ({ type: types.GET_CURRENT_CC_STATE, msg });

export const resetCCData = ({ type: types.RESET_CC_DATA });
