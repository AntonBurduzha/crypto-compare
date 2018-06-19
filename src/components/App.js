import React from 'react';
import { Layout } from 'antd';
import Footer from './layout/Footer';
import Sidebar from './layout/Sidebar';

const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar/>
      <Layout>
        <Layout.Content>
          <div style={{ background: '#fff', minHeight: '90vh' }}>
            Bill is a cat.
          </div>
        </Layout.Content>
        <Footer/>
      </Layout>
    </Layout>
  );
};

export default App;
