import * as constants from '../constants';

const initState = {
  data: {}
};

function currencyReducer(state = initState, action) {
  switch (action.type) {
    case constants.SET_CURRENT_CC_STATE: {
      return { ...state, data: { ...state.data, ...action.state } };
    }
    default:
      return state;
  }
}

export default currencyReducer;
