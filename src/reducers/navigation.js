// @flow
import type { SetNextTab, GetNextPage } from '../types/actions';
import type { NavState } from '../types/reducers';

const initState: NavState = {
  tab: 'list',
};

type Action = GetNextPage | SetNextTab;

function navigationReducer(
  state: NavState = initState,
  action: Action
): NavState {
  switch (action.type) {
    case 'SET_NEXT_TAB': {
      return { ...state, tab: action.tab };
    }
    default:
      return state;
  }
}

export default navigationReducer;
