import React from 'react';
import { connect } from 'react-redux';
import { Layout, notification } from 'antd';
import Footer from './layout/Footer';
import Sidebar from './layout/Sidebar';
import CurrenciesView from './currencies/CurrenciesView';
import MarketBTC from './currency-market/MarketBTC';
import MarketETH from './currency-market/MarketETH';
import { NAV_TABS } from '../constants';

notification.config({ duration: 3 });

const AppContent = ({ tab }) => {
  switch (tab) {
    case NAV_TABS.LIST:
      return <CurrenciesView/>;
    case NAV_TABS.MARKET_BTC:
      return <MarketBTC/>;
    case NAV_TABS.MARKET_ETH:
      return <MarketETH/>;
    default:
      return <h1>WTF!!!</h1>
  }
};

const App = ({ tab }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar/>
      <Layout>
        <Layout.Content>
          <AppContent tab={tab}/>
        </Layout.Content>
        <Footer/>
      </Layout>
    </Layout>
  );
};

function mapStateToProps(state) {
  return { tab: state.app.navigation.get('tab') }
}

export default connect(mapStateToProps)(App);
