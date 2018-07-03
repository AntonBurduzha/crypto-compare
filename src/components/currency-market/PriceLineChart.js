// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { bindActionCreators } from 'redux';
import * as currenciesActions from '../../actions';
import type { Action } from '../../types/actions';
import type { StoreState } from '../../types/reducers';
import type { CurrencyChartItem } from '../../types/entities';

type StateProps = { chartData: Array<CurrencyChartItem> };

type DispatchProps = { resetChartData: () => void };

type Props = StateProps & DispatchProps;

class PriceLineChart extends React.Component<Props> {
  componentWillUnmount() {
    this.props.resetChartData();
  }

  render() {
    const { chartData } = this.props;
    return (
      <React.Fragment>
        { chartData.length === 10 &&
            <LineChart width={600} height={300} data={chartData}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
              <XAxis dataKey="TIMESTAMP"/>
              <YAxis
                type="number"
                domain={['dataMin - 2', 'dataMax + 2']}/>
              <CartesianGrid strokeDasharray="3 3"/>
              <Tooltip/>
              <Legend />
              <Line type="monotone" dataKey="PRICE" stroke="#8884d8" activeDot={{r: 8}}/>
            </LineChart>
        }
      </React.Fragment>
    );
  }
}

function mapStateToProps(state: StoreState): StateProps {
  return { chartData: state.app.currency.chartData };
}

function mapDispatchToProps(dispatch: Action => void): DispatchProps {
  return bindActionCreators({ ...currenciesActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PriceLineChart);
