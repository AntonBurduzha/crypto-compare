import { FETCH_CRYPTO_CURRENCIES, GET_NEXT_PAGE, SET_NEXT_TAB } from '../constants';

export const fetchCryptoCurrencies = () => ({ type: FETCH_CRYPTO_CURRENCIES });

export const getNextPage = index => ({ type: GET_NEXT_PAGE, index });

export const getNextTab = tab => ({ type: SET_NEXT_TAB, tab });
