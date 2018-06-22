import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import io from 'socket.io-client';
import * as currenciesActions from '../../actions';

class MarketBTC extends Component {
  socket = io.connect('https://streamer.cryptocompare.com/');
  subscription = ['5~CCCAGG~BTC~USD', '11~BTC', '11~USD'];

  componentWillUnmount() {
    this.socket.emit('SubRemove', { subs: this.subscription });
  }

  componentDidMount() {
    this.socket.emit('SubAdd', { subs: this.subscription });
    this.socket.on("m", res => this.props.getCurrentCryptoCurrency(res));
  }

  render() {
    const { currency } = this.props;
    const priceColor = currency.FLAGS ? 'green' : 'red';
    const exchangeColor = currency.PRICE > currency.OPEN24HOUR ? 'green' : 'red';
    return (
      <div className="main-container">
        <h2 style={{ color: priceColor }}>BTC - USD { currency.PRICE }</h2>
        <h5>
          24h Change: { currency.CHANGE24HOUR }
          <span style={{ color: exchangeColor }}>{ currency.CHANGE24HOURPCT }</span>
        </h5>
        <h5>Last Market: { currency.LASTMARKET }</h5>
        <h5>Trade ID: { currency.LASTTRADEID }</h5>
        <h5>Open Hour: { currency.OPENHOUR }</h5>
        <h5>High Hour: { currency.HIGHHOUR }</h5>
        <h5>Low Hour: { currency.LOWHOUR }</h5>
        <h5>Open Day: { currency.OPEN24HOUR }</h5>
        <h5>High Day: { currency.HIGH24HOUR }</h5>
        <h5>Low Day: { currency.LOW24HOUR }</h5>
        <h5>Last Trade Volume: { currency.LASTVOLUME }</h5>
        <h5>Last Trade Volume To: { currency.LASTVOLUMETO }</h5>
        <h5>24h Volume: { currency.VOLUME24HOUR }</h5>
        <h5>24h VolumeTo: { currency.VOLUME24HOURTO }</h5>
        <h5>Total Volume (BTC): { currency.FULLVOLUMEFROM }</h5>
        <h5>Total Volume (USD): { currency.FULLVOLUMETO }</h5>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { currency: state.app.currency.data };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...currenciesActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MarketBTC);
