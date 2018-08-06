import React from 'react';
import { Pagination } from 'antd';
import { shallow } from 'enzyme';
import { CurrenciesPagination, mapStateToProps, mapDispatchToProps } from '../CurrenciesPagination';

describe('CurrenciesPagination component', () => {
  const spy = jest.fn();
  let wrap;
  beforeEach(() => {
    const props = {
      searchedKey: '',
      page: 1,
      fullList: [1, 2, 3],
      filteredList: [1, 2],
      getNextPage: spy,
    };
    wrap = shallow(<CurrenciesPagination {...props}/>);
  });

  it('renders without crashing', () => {
    expect(wrap).toBeDefined();
  });

  it('has Pagination if has searched key', () => {
    expect(wrap.find(Pagination)).toHaveLength(1);
    expect(wrap.containsMatchingElement(<Pagination/>)).toEqual(true);
  });

  it('has Pagination if has no searched key', () => {
    wrap.setProps({ filteredList: [1, 2], searchedKey: 'kek' });
    expect(wrap.find(Pagination)).toHaveLength(1);
    expect(wrap.containsMatchingElement(<Pagination/>)).toEqual(true);
  });

  it('has no Pagination ', () => {
    wrap.setProps({ fullList: [] });
    expect(wrap.find(Pagination)).toHaveLength(0);
    expect(wrap.containsMatchingElement(<Pagination/>)).toEqual(false);
  });

  it('call getNextPage action after clicking on any Pagination btn', () => {
    wrap.find(Pagination).props().onChange(2);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(2)
  });

  it('has redux context', () => {
    const initState = {
      app: { currencies: { searchedKey: '', page: 1, fullList: [1, 2, 3], filteredList: [1, 2] } }
    };
    const dispatch = jest.fn();

    expect(mapStateToProps(initState).searchedKey).toEqual('');
    expect(mapStateToProps(initState).page).toEqual(1);
    expect(mapStateToProps(initState).fullList).toEqual([1, 2, 3]);
    expect(mapStateToProps(initState).filteredList).toEqual([1, 2]);
    expect(mapDispatchToProps(dispatch).getNextPage).toBeDefined();
  });

  it('matches snapshot', () => {
    expect(wrap).toMatchSnapshot();
  });
});
