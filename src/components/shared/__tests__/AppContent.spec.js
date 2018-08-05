import React from 'react';
import { asyncComponent } from 'react-async-component';
import { shallow, mount } from 'enzyme';
import AppContent from '../AppContent';

describe('AppContent component', () => {
  it('renders without crashing', () => {
    const wrap = shallow(<AppContent tab="list"/>);
    expect(wrap).toBeDefined();
  });
});
