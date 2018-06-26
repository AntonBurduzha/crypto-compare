import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { bindActionCreators } from 'redux';
import * as currenciesActions from '../../actions';

class PriceLineChart extends PureComponent {
  componentWillUnmount() {
    this.props.resetChartData();
  }

  render() {
    const { currency } = this.props;
    const chartData = currency.get('chartData');
    return (
      <Fragment>
        { chartData.size === 10 &&
            <LineChart width={600} height={300} data={chartData.toJS()}
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
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return { currency: state.app.currency };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...currenciesActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PriceLineChart);
