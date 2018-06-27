import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'antd';
import { CURRENCIES } from '../../constants';


class MarketValues extends PureComponent {
  render() {
    const { currency, cc } = this.props;
    const priceColor = currency.FLAGS ? 'green' : 'red';
    const arrow = currency.FLAGS ? <Icon type="arrow-up" /> : <Icon type="arrow-down" />;
    const exchangeColor = currency.PRICE > currency.OPEN24HOUR ? 'green' : 'red';

    return (
      <div className="cc-socket-wrapper">
        <h1 style={{ color: priceColor }}>
          { cc } - {CURRENCIES.USD} { currency.PRICE } { arrow }</h1>
        <h3>
          24h Change: { currency.CHANGE24HOUR }{' '}
          <span style={{ color: exchangeColor }}>
            ({ currency.CHANGE24HOURPCT })
          </span>
        </h3>
        <h3>Last Market: { currency.LASTMARKET }</h3>
        <h3>Trade ID: { currency.LASTTRADEID }</h3>
        <h3>Open Hour: { currency.OPENHOUR }</h3>
        <h3>High Hour: { currency.HIGHHOUR }</h3>
        <h3>Low Hour: { currency.LOWHOUR }</h3>
        <h3>Open Day: { currency.OPEN24HOUR }</h3>
        <h3>High Day: { currency.HIGH24HOUR }</h3>
        <h3>Low Day: { currency.LOW24HOUR }</h3>
        <h3>Last Trade Volume: { currency.LASTVOLUME }</h3>
        <h3>Last Trade Volume To: { currency.LASTVOLUMETO }</h3>
        <h3>24h Volume: { currency.VOLUME24HOUR }</h3>
        <h3>24h VolumeTo: { currency.VOLUME24HOURTO }</h3>
        <h3>Total Volume ({ cc }): { currency.FULLVOLUMEFROM }</h3>
        <h3>Total Volume ({CURRENCIES.USD}): { currency.FULLVOLUMETO }</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { currency: state.app.currency.data };
}

export default connect(mapStateToProps)(MarketValues);
