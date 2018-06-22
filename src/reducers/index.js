import { combineReducers } from 'redux';
import currenciesReducer from './currencies';
import navigationReducer from './navigation';

export default combineReducers({
  currencies: currenciesReducer,
  navigation: navigationReducer,
});
