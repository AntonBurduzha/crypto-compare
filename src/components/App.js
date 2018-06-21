import React from 'react';
import { Layout } from 'antd';
import Footer from './layout/Footer';
import Sidebar from './layout/Sidebar';
import CurrenciesView from './currencies/CurrenciesView';
import { notification } from 'antd';

notification.config({ duration: 3 });

const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar/>
      <Layout>
        <Layout.Content>
          <CurrenciesView/>
        </Layout.Content>
        <Footer/>
      </Layout>
    </Layout>
  );
};

export default App;
