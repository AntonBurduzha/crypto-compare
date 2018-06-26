import * as constants from '../constants';
import Immutable from 'immutable';

const initState = Immutable.fromJS({
  data: {
    CHANGE24HOUR: "N/A",
    CHANGE24HOURPCT: "N/A",
    FLAGS: "N/A",
    FULLVOLUMEFROM: "N/A",
    FULLVOLUMETO: "N/A",
    HIGH24HOUR: "N/A",
    HIGHHOUR: "N/A",
    LASTMARKET: "N/A",
    LASTTRADEID: "N/A",
    LASTVOLUME: "N/A",
    LASTVOLUMETO: "N/A",
    LOW24HOUR: "N/A",
    LOWHOUR: "N/A",
    OPEN24HOUR: "N/A",
    OPENHOUR: "N/A",
    PRICE: "N/A",
    VOLUME24HOUR: "N/A",
    VOLUME24HOURTO: "N/A",
    VOLUMEHOUR: "N/A",
    VOLUMEHOURTO: "N/A",
  },
  chartData: []
});

function currencyReducer(state = initState, action) {
  switch (action.type) {
    case constants.SET_CURRENT_CC_STATE: {
      return state
        .set('data', state.get('data').merge(Immutable.fromJS(action.state)));
    }
    case constants.RESET_CC_DATA: {
      return state
        .set('data', initState.get('data'));
    }
    case constants.SET_CHART_DATA: {
      return state
        .set('chartData', action.list);
    }
    case constants.RESET_CHART_DATA: {
      return state
        .set('chartData', Immutable.List([]));
    }
    default:
      return state;
  }
}

export default currencyReducer;
