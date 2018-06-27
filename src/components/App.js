import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, notification } from 'antd';
import { asyncComponent } from 'react-async-component';
import Footer from './layout/Footer';
import Sidebar from './layout/Sidebar';
import { NAV_TABS } from '../constants';

const AsyncCurrenciesView =  asyncComponent({ resolve: () => import('./currencies/CurrenciesView') });
const AsyncMarketBTC =  asyncComponent({ resolve: () => import('./currency-market/MarketBTC') });
const AsyncMarketETH =  asyncComponent({ resolve: () => import('./currency-market/MarketETH') });

notification.config({ duration: 3 });

const AppContent = ({ tab }) => {
  switch (tab) {
    case NAV_TABS.LIST:
      return <AsyncCurrenciesView/>
    case NAV_TABS.MARKET_BTC:
      return <AsyncMarketBTC/>
    case NAV_TABS.MARKET_ETH:
      return <AsyncMarketETH/>
    default:
  }
};

class App extends Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar/>
        <Layout>
          <Layout.Content>
            <AppContent tab={this.props.tab}/>
          </Layout.Content>
          <Footer/>
        </Layout>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return { tab: state.app.navigation.tab }
}

export default connect(mapStateToProps)(App);
