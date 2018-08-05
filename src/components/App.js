// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Layout, notification } from 'antd';
import Footer from './layout/Footer';
import Sidebar from './layout/Sidebar';
import AppContent from './shared/AppContent';
import type { StoreState } from '../types/reducers';

notification.config({ duration: 3 });

type StateProps = {
  tab: string,
};

export class App extends React.Component<StateProps> {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar/>
        <Layout>
          <Layout.Content>
            <AppContent tab={this.props.tab} />
          </Layout.Content>
          <Footer/>
        </Layout>
      </Layout>
    );
  }
}

export function mapStateToProps(state: StoreState): StateProps {
  return { tab: state.app.navigation.tab };
}

export default connect(mapStateToProps)(App);
