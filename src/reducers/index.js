import { combineReducers } from 'redux';
import currenciesReducer from './currencies';
import currencyReducer from './currency';
import navigationReducer from './navigation';

export default combineReducers({
  currencies: currenciesReducer,
  navigation: navigationReducer,
  currency: currencyReducer,
});
