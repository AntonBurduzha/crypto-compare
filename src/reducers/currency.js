// @flow
import type { Action } from '../types/actions';
import type { CurrencyState } from '../types/reducers';

export const initState: CurrencyState = {
  data: {
    CHANGE24HOUR: 'N/A',
    CHANGE24HOURPCT: 'N/A',
    FLAGS: 'N/A',
    FULLVOLUMEFROM: 'N/A',
    FULLVOLUMETO: 'N/A',
    HIGH24HOUR: 'N/A',
    HIGHHOUR: 'N/A',
    LASTMARKET: 'N/A',
    LASTTRADEID: 'N/A',
    LASTVOLUME: 'N/A',
    LASTVOLUMETO: 'N/A',
    LOW24HOUR: 'N/A',
    LOWHOUR: 'N/A',
    OPEN24HOUR: 'N/A',
    OPENHOUR: 'N/A',
    PRICE: 'N/A',
    VOLUME24HOUR: 'N/A',
    VOLUME24HOURTO: 'N/A',
    VOLUMEHOUR: 'N/A',
    VOLUMEHOURTO: 'N/A',
    TIMESTAMP: '',
  },
  chartData: []
};

function currencyReducer(state: CurrencyState = initState, action: Action): CurrencyState {
  switch (action.type) {
    case 'SET_CURRENT_CC_STATE': {
      return { ...state, data: { ...state.data, ...action.state } };
    }
    case 'RESET_CC_DATA': {
      return { ...state, data: initState.data };
    }
    case 'SET_CHART_DATA': {
      return { ...state, chartData: action.list };
    }
    case 'RESET_CHART_DATA': {
      return { ...state, chartData: [] };
    }
    default:
      return state;
  }
}

export default currencyReducer;
