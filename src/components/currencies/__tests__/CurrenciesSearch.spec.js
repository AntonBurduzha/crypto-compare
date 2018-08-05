import React from 'react';
import { Input } from 'antd';
import { shallow } from 'enzyme';
import { CurrenciesSearch, mapDispatchToProps } from '../CurrenciesSearch';

describe('CurrenciesSearch component', () => {
  const spy = jest.fn();
  const props = { searchCryptoCurrencies: spy };
  const wrap = shallow(<CurrenciesSearch {...props}/>);

  it('renders without crashing', () => {
    expect(wrap).toBeDefined();
  });

  it('contains 1 Input', () => {
    expect(wrap.find(Input.Search)).toHaveLength(1);
  })

  it('emit action after search btn clicked', () => {
    wrap.find(Input.Search).props().onSearch('BTC');
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('BTC');
  });

  it('has redux context', () => {
    const dispatch = jest.fn();
    expect(mapDispatchToProps(dispatch).searchCryptoCurrencies).toBeDefined();
  });

  it('matches snapshot', () => {
    expect(wrap).toMatchSnapshot();
  });
});
