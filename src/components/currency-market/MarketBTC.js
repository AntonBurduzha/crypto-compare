// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import io from 'socket.io-client';
import { Row, Col } from 'antd';
import * as currenciesActions from '../../actions';
import { CRYPTO_COMPARE_WEB_SOCKET_CHANNEL, CURRENCIES, SIGNATURES } from '../../constants';
import MarketValues from './MarketValues';
import PriceLineChart from './PriceLineChart';
import { ButtonGroup } from '../shared/ButtonGroup';
import type { Action } from '../../types/actions';

type DispatchProps = { getCurrentCryptoCurrency: (string) => void };

type State = { isConnected: boolean };

class MarketBTC extends React.Component<DispatchProps, State> {
  state = { isConnected: false };
  socket: any = io.connect(CRYPTO_COMPARE_WEB_SOCKET_CHANNEL);
  subscription = [SIGNATURES.BTC_F, SIGNATURES.BTC_FV, SIGNATURES.USD_FV];

  componentWillUnmount() {
    this.socket.emit('SubRemove', { subs: this.subscription });
    this.setState({ isConnected: false });
  }

  componentDidMount() {
    this.socket.emit('SubAdd', { subs: this.subscription });
    this.setState({ isConnected: true });
    this.socket.on("m", (res: string): void => this.props.getCurrentCryptoCurrency(res));
  }

  startConnection = (): void => {
    this.socket.emit('SubAdd', { subs: this.subscription });
    this.setState({ isConnected: true });
  }

  stopConnection = (): void => {
    this.socket.emit('SubRemove', { subs: this.subscription });
    this.setState({ isConnected: false });
  }

  render() {
    return (
      <div className="main-container">
        <Row type="flex" justify="start" align="top">
          <Col span={8}><MarketValues cc={CURRENCIES.BTC}/></Col>
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

function mapDispatchToProps(dispatch: Action => void): DispatchProps {
  return bindActionCreators({ ...currenciesActions }, dispatch);
}

export default connect(null, mapDispatchToProps)(MarketBTC);
