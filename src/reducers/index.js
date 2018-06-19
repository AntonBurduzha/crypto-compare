import { combineReducers } from 'redux'
import currenciesReducer from './currencies';

export default combineReducers({
  currencies: currenciesReducer
});
