// @flow
import * as React from 'react';
import { asyncComponent } from 'react-async-component';
import { NAV_TABS } from '../../constants';

const AsyncCurrenciesView = asyncComponent({ resolve: () => import('../currencies/CurrenciesView') });
const AsyncMarketBTC = asyncComponent({ resolve: () => import('../currency-market/MarketBTC') });
const AsyncMarketETH = asyncComponent({ resolve: () => import('../currency-market/MarketETH') });

const AppContent = ({ tab }: { tab: string }) => {
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

export default AppContent;
