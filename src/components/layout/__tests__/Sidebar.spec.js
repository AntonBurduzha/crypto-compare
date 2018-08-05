import React from 'react';
import { shallow, mount } from 'enzyme';
import { Layout, Menu, Icon } from 'antd';
import { Sidebar, mapStateToProps, mapDispatchToProps }  from '../Sidebar';

describe('Sidebar component', () => {
  const spy = jest.fn();
  const props = { getNextTab: spy }
  const wrap = shallow(<Sidebar {...props}/>);

  it('renders without crashing', () => {
    expect(wrap).toBeDefined();
  });

  it('has 3 tabs', () => {
    expect(wrap.find(Menu).children()).toHaveLength(3);
  });

  it('has icons in each tab', () => {
    expect(wrap.find(Menu.Item).find(Icon).exists()).toBeTruthy();
    expect(wrap.find(Menu.Item).find(Icon).length).toEqual(3);
  });

  it('checks state and it\'s changing', () => {
    wrap.setState({ collapsed: false });
    expect(wrap.state()).toEqual({ collapsed: false });

    wrap.find(Layout.Sider).props().onCollapse(true);
    expect(wrap.state()).toEqual({ collapsed: true });
  });

  it('emit action when user click on tab', () => {
    wrap.find(Menu.Item).at(1).simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('marketBTC');
  });

  it('has redux context', () => {
    const initState = {
      app: { navigation: { tab: 'list' } }
    };
    const dispatch = jest.fn();

    expect(mapStateToProps(initState).tab).toEqual('list');
    expect(mapDispatchToProps(dispatch).getNextTab).toBeDefined();
  });

  it('matches snapshot', () => {
    expect(wrap).toMatchSnapshot();
  })
})
