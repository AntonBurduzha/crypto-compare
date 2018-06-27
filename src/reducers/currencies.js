import * as constants from '../constants';

const initState = {
  fetching: false,
  error: false,
  fullList: [],
  filteredList: [],
  pageList: [],
  page: 1,
  searchedKey: ''
};

function currenciesReducer(state = initState, action) {
  switch (action.type) {
    case constants.FETCH_CRYPTO_CURRENCIES: {
      return { ...state, fetching: true, error: false };
    }
    case constants.SUCCESS_CRYPTO_CURRENCIES: {
      return {
        ...state,
        fetching: false,
        fullList: action.list,
        pageList: action.list.slice(0, constants.PAGE_SIZE),
      };
    }
    case constants.FAILED_CRYPTO_CURRENCIES: {
      return { ...state, fetching: false, error: true };
    }
    case constants.SET_NEXT_PAGE: {
      return { ...state, pageList: action.pageList, page: action.index };
    }
    case constants.SET_SEARCH_CC_VALUE: {
      return { ...state, searchedKey: action.value };
    }
    case constants.UPDATE_LIST_BY_SEARCH_VALUE: {
      return { ...state, pageList: action.pageList, filteredList: action.filteredList };
    }
    default:
      return state;
  }
}

export default currenciesReducer;
