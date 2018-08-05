import React from 'react';
import { App, mapStateToProps } from '../App';
import Footer from '../layout/Footer';
import Sidebar from '../layout/Sidebar';
import AppContent from '../shared/AppContent';
import { shallow } from 'enzyme';

describe('App component', () => {
  const wrap = shallow(<App/>);

  it('renders without crashing', () => {
    expect(wrap).toBeDefined();
  });

  it('contains Footer, Sidebar and AppContent', () => {
    expect(wrap.containsMatchingElement(<Footer/>)).toBeTruthy();
    expect(wrap.containsMatchingElement(<Sidebar/>)).toBeTruthy();
    expect(wrap.containsMatchingElement(<AppContent/>)).toBeTruthy();
  });

  it('has redux context', () => {
    const initState = {
      app: { navigation: { tab: 'list' } }
    };
    expect(mapStateToProps(initState).tab).toEqual('list');
  });

  it('matches snapshot', () => {
    expect(wrap).toMatchSnapshot();
  });
});
