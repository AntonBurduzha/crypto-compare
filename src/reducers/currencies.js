import * as constants from '../constants';

const initState = {
  fetching: false,
  error: false,
  fullList: {},
  pageList: {},
  page: 1
};

function filterByPageIndex(list, index) {
  const isLastPage = Math.ceil(Object.keys(list).length / constants.PAGE_SIZE) === index;
  if (index === 1) {
    return { ...Object.values(list).slice(0, constants.PAGE_SIZE) };
  } else if (isLastPage) {
    return { ...Object.values(list).slice(((index * constants.PAGE_SIZE) - constants.PAGE_SIZE)) }
  } else {
    const endIndex = index * constants.PAGE_SIZE;
    const startIndex = endIndex - constants.PAGE_SIZE;
    return { ...Object.values(list).slice(startIndex, endIndex) };
  }
}

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
        pageList: filterByPageIndex(action.list, 1)
      };
    }
    case constants.FAILED_CRYPTO_CURRENCIES: {
      return { ...state, fetching: false, error: true };
    }
    case constants.GET_NEXT_PAGE: {
      return { ...state, pageList: filterByPageIndex(state.fullList, action.index), page: action.index }
    }
    default:
      return state;
  }
}

export default currenciesReducer;
