import React from 'react';
import { connect } from 'react-redux';
import { Layout, notification } from 'antd';
import Footer from './layout/Footer';
import Sidebar from './layout/Sidebar';
import CurrenciesView from './currencies/CurrenciesView';
import MarketBTC from './currency-market';
import { NAV_TABS } from '../constants';

notification.config({ duration: 3 });

const App = ({ tab }) => {
  let content = null;
  switch (tab) {
    case NAV_TABS.LIST:
      content = <CurrenciesView/>;
      break;
    case NAV_TABS.MARKET_BTC:
      content = <MarketBTC/>;
      break;
    case NAV_TABS.MARKET_ETH:
      content = <MarketBTC/>;
      break;
    default:
      content = <h1>WTF!!!</h1>
  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar/>
      <Layout>
        <Layout.Content>{ content }</Layout.Content>
        <Footer/>
      </Layout>
    </Layout>
  );
};

function mapStateToProps(state) {
  return { tab: state.app.navigation.tab }
}

export default connect(mapStateToProps)(App);
