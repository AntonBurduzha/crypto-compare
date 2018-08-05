import React from 'react';
import { shallow, mount } from 'enzyme';
import { Button } from 'antd';
import { ButtonGroup } from '../ButtonGroup';

describe('ButtonGroup component', () => {
  it('renders without crashing', () => {
    const wrap = shallow(<ButtonGroup/>);
    expect(wrap).toBeDefined();
  });

  it('has 2 buttons', () => {
    const wrap = mount(<ButtonGroup/>);
    expect(wrap.find(Button)).toHaveLength(2);
    expect(wrap.find(Button).at(0).text()).toEqual('Start');
    expect(wrap.find(Button).at(1).text()).toEqual('Stop');
  });

  it('matches snapshot', () => {
    const wrap = shallow(<ButtonGroup/>);
    expect(wrap).toMatchSnapshot();
  })
});
