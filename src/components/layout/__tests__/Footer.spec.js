import React from 'react';
import { shallow, mount } from 'enzyme';
import { Layout } from 'antd';
import Footer from '../Footer';

describe('Footer component', () => {
  it('renders without crashing', () => {
    const wrap = shallow(<Footer/>);
    expect(wrap).toBeDefined();
  });

  it('has default text', () => {
    const wrap = mount(<Footer/>);
    expect(wrap.text()).toEqual('Crypto compare ©2018 Created by Anton Burduzha');
  });

  it('matches snapshot', () => {
    const wrap = shallow(<Footer/>);
    expect(wrap).toMatchSnapshot();
  })
});
