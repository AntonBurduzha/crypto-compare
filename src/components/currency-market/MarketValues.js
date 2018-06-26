import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'antd';
import { CURRENCIES } from '../../constants';


class MarketValues extends PureComponent {
  render() {
    const { currency, cc } = this.props;
    const priceColor = currency.getIn(['data', 'FLAGS']) ? 'green' : 'red';
    const arrow = currency.getIn(['data', 'FLAGS']) ? <Icon type="arrow-up" /> : <Icon type="arrow-down" />;
    const exchangeColor = currency.getIn(['data', 'PRICE']) > currency.getIn(['data', 'OPEN24HOUR']) ? 'green' : 'red';

    return (
      <div className="cc-socket-wrapper">
        <h1 style={{ color: priceColor }}>
          { cc } - {CURRENCIES.USD} { currency.getIn(['data', 'PRICE']) } { arrow }</h1>
        <h3>
          24h Change: { currency.getIn(['data', 'CHANGE24HOUR']) }{' '}
          <span style={{ color: exchangeColor }}>
            ({ currency.getIn(['data', 'CHANGE24HOURPCT']) })
          </span>
        </h3>
        <h3>Last Market: { currency.getIn(['data', 'LASTMARKET']) }</h3>
        <h3>Trade ID: { currency.getIn(['data', 'LASTTRADEID']) }</h3>
        <h3>Open Hour: { currency.getIn(['data', 'OPENHOUR']) }</h3>
        <h3>High Hour: { currency.getIn(['data', 'HIGHHOUR']) }</h3>
        <h3>Low Hour: { currency.getIn(['data', 'LOWHOUR']) }</h3>
        <h3>Open Day: { currency.getIn(['data', 'OPEN24HOUR']) }</h3>
        <h3>High Day: { currency.getIn(['data', 'HIGH24HOUR']) }</h3>
        <h3>Low Day: { currency.getIn(['data', 'LOW24HOUR']) }</h3>
        <h3>Last Trade Volume: { currency.getIn(['data', 'LASTVOLUME']) }</h3>
        <h3>Last Trade Volume To: { currency.getIn(['data', 'LASTVOLUMETO']) }</h3>
        <h3>24h Volume: { currency.getIn(['data', 'VOLUME24HOUR']) }</h3>
        <h3>24h VolumeTo: { currency.getIn(['data', 'VOLUME24HOURTO']) }</h3>
        <h3>Total Volume ({ cc }): { currency.getIn(['data', 'FULLVOLUMEFROM']) }</h3>
        <h3>Total Volume ({CURRENCIES.USD}): { currency.getIn(['data', 'FULLVOLUMETO']) }</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { currency: state.app.currency };
}

export default connect(mapStateToProps)(MarketValues);
