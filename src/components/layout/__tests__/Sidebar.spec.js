import React from 'react';
import { shallow, mount } from 'enzyme';
import { Layout, Menu, Icon } from 'antd';
import { Sidebar }  from '../Sidebar';

describe('Sidebar component', () => {
  it('renders without crashing', () => {
    const wrap = shallow(<Sidebar/>);
    expect(wrap).toBeDefined();
  });

  it('has 3 tabs', () => {
    const wrap = shallow(<Sidebar/>);
    expect(wrap.find(Menu).children()).toHaveLength(3);
  });

  it('has icons in each tab', () => {
    const wrap = shallow(<Sidebar/>);
    expect(wrap.find(Menu.Item).find(Icon).exists()).toBeTruthy();
    expect(wrap.find(Menu.Item).find(Icon).length).toEqual(3);
  });

  it('checks state and it\'s changing', () => {
    const wrap = shallow(<Sidebar/>);
    wrap.setState({ collapsed: false });
    expect(wrap.state()).toEqual({ collapsed: false });

    wrap.find(Layout.Sider).props().onCollapse(true);
    expect(wrap.state()).toEqual({ collapsed: true });
  });

  it('emit action when user click on tab', () => {
    const spy = jest.fn();
    const props = { getNextTab: spy }
    const wrap = shallow(<Sidebar {...props}/>);

    wrap.find(Menu.Item).at(1).simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('marketBTC');
  });

  it('matches snapshot', () => {
    const wrap = shallow(<Sidebar/>);
    expect(wrap).toMatchSnapshot();
  })
})
