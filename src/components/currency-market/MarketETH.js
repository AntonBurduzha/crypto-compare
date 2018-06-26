import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import io from 'socket.io-client';
import { Row, Col } from 'antd';
import * as currenciesActions from '../../actions';
import { CRYPTO_COMPARE_WEB_SOCKET_CHANNEL, CURRENCIES, SIGNATURES } from '../../constants';
import MarketValues from './MarketValues';
import PriceLineChart from './PriceLineChart';
import { ButtonGroup } from '../shared/ButtonGroup';

class MarketBTC extends Component {
  state = { isConnected: false };
  socket = io.connect(CRYPTO_COMPARE_WEB_SOCKET_CHANNEL);
  subscription = [SIGNATURES.ETH_F, SIGNATURES.ETH_FV, SIGNATURES.USD_FV];

  componentWillUnmount() {
    this.socket.emit('SubRemove', { subs: this.subscription });
    this.setState({ isConnected: false });
  }

  componentDidMount() {
    this.socket.emit('SubAdd', { subs: this.subscription });
    this.setState({ isConnected: true });
    this.socket.on("m", res => this.props.getCurrentCryptoCurrency(res));
  }

  startConnection = () => {
    this.socket.emit('SubAdd', { subs: this.subscription });
    this.setState({ isConnected: true });
  }

  stopConnection = () => {
    this.socket.emit('SubRemove', { subs: this.subscription });
    this.setState({ isConnected: false });
  }

  render() {
    return (
      <div className="main-container">
        <Row type="flex" justify="start" align="top">
          <Col span={8}><MarketValues cc={CURRENCIES.ETH}/></Col>
          <Col span={12}>
            <ButtonGroup
              isConnected={this.state.isConnected}
              startConnection={this.startConnection}
              stopConnection={this.stopConnection}
            />
            <PriceLineChart/>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...currenciesActions }, dispatch);
}

export default connect(null, mapDispatchToProps)(MarketBTC);
