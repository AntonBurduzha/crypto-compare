import navigationReducer from '../navigation';
import * as actions from '../../actions';

describe('navigationReducer', () => {
  it('should return the initial state', () => {
    const initState = { tab: 'list' };
    expect(navigationReducer(undefined, {})).toEqual(initState);
  });

  it('should handle SET_NEXT_TAB', () => {
    const expectedState = { tab: 'another tab' };
    expect(navigationReducer(undefined, actions.getNextTab('another tab'))).toEqual(expectedState);
  });
});
