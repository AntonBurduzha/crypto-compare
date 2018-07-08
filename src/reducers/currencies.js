// @flow
import { PAGE_SIZE } from '../constants';
import type { Action } from '../types/actions';
import type { CurrenciesState } from '../types/reducers';

export const initState: CurrenciesState = {
  fetching: false,
  error: false,
  fullList: [],
  filteredList: [],
  pageList: [],
  page: 1,
  searchedKey: '',
};

function currenciesReducer(
  state: CurrenciesState = initState,
  action: Action
): CurrenciesState {
  switch (action.type) {
    case 'FETCH_CRYPTO_CURRENCIES': {
      return { ...state, fetching: true, error: false };
    }
    case 'SUCCESS_CRYPTO_CURRENCIES': {
      return {
        ...state,
        fetching: false,
        fullList: action.list,
        pageList: action.list.slice(0, PAGE_SIZE),
      };
    }
    case 'FAILED_CRYPTO_CURRENCIES': {
      return { ...state, fetching: false, error: true };
    }
    case 'GET_NEXT_PAGE': {
      return { ...state, page: action.index };
    }
    case 'SET_SEARCH_CC_VALUE': {
      return { ...state, searchedKey: action.value };
    }
    case 'UPDATE_LIST_BY_SEARCH_VALUE': {
      return {
        ...state,
        pageList: action.pageList,
        filteredList: action.filteredList,
      };
    }
    default:
      return state;
  }
}

export default currenciesReducer;
