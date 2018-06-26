import * as constants from '../constants';
import Immutable from 'immutable';

const initState =Immutable.fromJS({
  fetching: false,
  error: false,
  fullList: [],
  filteredList: [],
  pageList: [],
  page: 1,
  searchedKey: ''
});

function currenciesReducer(state = initState, action) {
  switch (action.type) {
    case constants.FETCH_CRYPTO_CURRENCIES: {
      return state
        .set('fetching', true)
        .set('error', false);
    }
    case constants.SUCCESS_CRYPTO_CURRENCIES: {
      return state
        .set('fetching', false)
        .set('fullList', Immutable.fromJS(action.list))
        .set('pageList', Immutable.fromJS(action.list).slice(0, constants.PAGE_SIZE));
    }
    case constants.FAILED_CRYPTO_CURRENCIES: {
      return state
        .set('fetching', false)
        .set('error', true);
    }
    case constants.SET_NEXT_PAGE: {
      return state
        .set('pageList', action.pageList)
        .set('page', action.index);
    }
    case constants.SET_SEARCH_CC_VALUE: {
      return state
        .set('searchedKey', action.value);
    }
    case constants.UPDATE_LIST_BY_SEARCH_VALUE: {
      return state
        .set('pageList', action.pageList)
        .set('filteredList', action.filteredList);
    }
    default:
      return state;
  }
}

export default currenciesReducer;
