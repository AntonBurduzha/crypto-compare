import * as types from '../constants';

const initState = {
  fetching: false,
  error: false,
  currencies: {}
};

function currenciesReducer(state = initState, action) {
  switch (action.type) {
    case types.FETCH_CRYPTO_CURRENCIES: {
      return { ...state, fetching: true, error: false };
    }
    case types.SUCCESS_CRYPTO_CURRENCIES: {
      return { ...state, fetching: false, currencies: action.list };
    }
    case types.FAILED_CRYPTO_CURRENCIES: {
      return { ...state, fetching: false, error: true };
    }
    default:
      return state;
  }
}

export default currenciesReducer;
