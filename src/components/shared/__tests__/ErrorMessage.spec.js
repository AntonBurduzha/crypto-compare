import React from 'react';
import { shallow } from 'enzyme';
import { ErrorMessage } from '../ErrorMessage';

describe('ErrorMessage component', () => {
  const wrap = shallow(<ErrorMessage/>);

  it('renders without crashing', () => {
    expect(wrap).toBeDefined();
  });

  it('has default text', () => {
    expect(wrap.find('h3').text()).toEqual('Oups! Error occurs, please try again later.');
  });

  it('matches snapshot', () => {
    expect(wrap).toMatchSnapshot();
  })
});
