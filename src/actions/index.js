import { FETCH_CRYPTO_CURRENCIES, GET_NEXT_PAGE } from '../constants';

export const fetchCryptoCurrencies = () => {
  return { type: FETCH_CRYPTO_CURRENCIES }
};

export const getNextPage = index => {
  return { type: GET_NEXT_PAGE, index };
};
