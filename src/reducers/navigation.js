import * as constants from '../constants';
import Immutable from 'immutable';

const initState = Immutable.fromJS({
  tab: 'list',
});

function navigationReducer(state = initState, action) {
  switch (action.type) {
    case constants.SET_NEXT_TAB: {
      return state.set('tab', action.tab);
    }
    default:
      return state;
  }
}

export default navigationReducer;
