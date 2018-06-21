import { FETCH_CRYPTO_CURRENCIES, GET_NEXT_PAGE } from '../constants';

export const fetchCryptoCurrencies = () => ({ type: FETCH_CRYPTO_CURRENCIES });

export const getNextPage = index => ({ type: GET_NEXT_PAGE, index });
