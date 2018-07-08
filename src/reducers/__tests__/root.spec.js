import { createStore } from 'redux';
import rootReducer from '../index';
import * as actions from '../../actions';

describe('rootReducer', () => {
  it('should check root reducer init', () => {
    const store = createStore(rootReducer);

    store.dispatch(actions.getNextTab('marketBTC'));

    const navState = store.getState().navigation;
    const expectedState = { tab: 'marketBTC' };

    expect(navState).toEqual(expectedState);
  });
});
