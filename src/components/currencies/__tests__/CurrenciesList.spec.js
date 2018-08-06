import React from 'react';
import { Card } from 'antd';
import { shallow } from 'enzyme';
import CurrenciesList from '../CurrenciesList';

describe('CurrenciesList component', () => {
  const props = {
    list: [
      { Url: '/0/', Id: '0', FullName: 'Anton', ImageUrl: '/qwe', Symbol: 'A', CoinName: 'ACoin' },
      { Url: '/1/', Id: '1', FullName: 'Anto', ImageUrl: '/ewq', Symbol: 'B', CoinName: 'BCoin' },
      { Url: '/2/', Id: '2', FullName: 'Ant', ImageUrl: '/rty', Symbol: 'C', CoinName: 'CCoin' },
      { Url: '/3/', Id: '3', FullName: 'An', ImageUrl: '/yrt', Symbol: 'D', CoinName: 'DCoin' },
      { Url: '/4/', Id: '4', FullName: 'A', ImageUrl: '/zxc', Symbol: 'E', CoinName: 'ECoin' },
    ]
  }
  const wrap = shallow(<CurrenciesList {...props}/>);

  it('renders without crashing', () => {
    expect(wrap).toBeDefined();
  });

  it('contains 5 Cards', () => {
    expect(wrap.find(Card)).toHaveLength(5);
  });

  it('contains 0 Cards', () => {
    wrap.setProps({ list: [] });
    expect(wrap.find(Card)).toHaveLength(0);
  });

  it('contains 1 Card with Meta', () => {
    wrap.setProps({
      list: [{ Url: '/0/', Id: '0', FullName: 'Anton', ImageUrl: '/qwe', Symbol: 'A', CoinName: 'ACoin' }]
    });
    expect(wrap.find(Card.Meta)).toHaveLength(1);
    expect(wrap.find(Card.Meta).props().title).toEqual('A');
    expect(wrap.find(Card.Meta).props().description).toEqual('ACoin');
  });

  it('matches snapshot', () => {
    expect(wrap).toMatchSnapshot();
  });
});
