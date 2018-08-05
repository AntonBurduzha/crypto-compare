import React from 'react';
import { Spin } from 'antd';
import { shallow } from 'enzyme';
import { CurrenciesView, mapStateToProps, mapDispatchToProps } from '../CurrenciesView';
import { ErrorMessage } from '../../shared/ErrorMessage';
import CurrenciesPagination from '../CurrenciesPagination';
import CurrenciesList from '../CurrenciesList';
import CurrenciesSearch from '../CurrenciesSearch';

describe('CurrenciesView component', () => {
  const spy = jest.fn();
  const props = {
    fetchCryptoCurrencies: spy
  };
  const wrap = shallow(<CurrenciesView {...props}/>);

  it('renders without crashing', () => {
    expect(wrap).toBeDefined();
  });

  it('fetchCryptoCurrencies called', () => {
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('spinning flag matches fetching property', () => {
    expect(wrap.find(Spin).props().spinning).toEqual(true);
    wrap.setProps({ fetching: false });
    expect(wrap.find(Spin).props().spinning).toEqual(false);
  });

  it('contains ErrorMessage if api rejected call', () => {
    expect(wrap.containsMatchingElement(<ErrorMessage/>)).toEqual(false);
    wrap.setProps({ error: true });
    expect(wrap.containsMatchingElement(<ErrorMessage/>)).toEqual(true);
    wrap.setProps({ error: false });
  });

  it('contains CurrenciesPagination', () => {
    expect(wrap.containsMatchingElement(<CurrenciesPagination/>)).toEqual(true);
  })

  it('contains CurrenciesSearch', () => {
    expect(wrap.containsMatchingElement(<CurrenciesSearch/>)).toEqual(true);
  })

  it('contains CurrenciesList', () => {
    expect(wrap.containsMatchingElement(<CurrenciesList/>)).toEqual(true);
  })

  it('has redux context', () => {
    const initState = {
      app: { currencies: { fetching: false, error: false, fullList: [1, 2, 3] } }
    };
    const dispatch = jest.fn();

    expect(mapStateToProps(initState).fetching).toEqual(false);
    expect(mapStateToProps(initState).error).toEqual(false);
    expect(mapStateToProps(initState).pageList).toEqual([]);
    expect(mapDispatchToProps(dispatch).fetchCryptoCurrencies).toBeDefined();
  });

  it('matches snapshot', () => {
    expect(wrap).toMatchSnapshot();
  });
});
