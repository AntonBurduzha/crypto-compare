import * as constants from '../constants';

const initState = {
  tab: 'list',
};

function navigationReducer(state = initState, action) {
  switch (action.type) {
    case constants.SET_NEXT_TAB: {
      return { ...state, tab: action.tab };
    }
    default:
      return state;
  }
}

export default navigationReducer;
