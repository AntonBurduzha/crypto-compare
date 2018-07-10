import mockAxios from 'axios';
import Api from '../index';
import { CRYPRO_COMPARE_NEW_API } from '../../constants';

describe('getCryptoCurrenciesList api call', () => {
  afterEach(() => {
    mockAxios.get.mockReset();
  });

  it('should return resolved promise with data', async() => {
    const list = [
      { name: 'Anton', age: 24 },
      { name: 'NotAnton', age: 24 },
    ];
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: { Data: list } }));
    const cc = await Api.getCryptoCurrenciesList();
    expect(cc).toEqual(list);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(`${CRYPRO_COMPARE_NEW_API}/data/all/coinlist`);
  });

  it('should return rejected promise with err', async() => {
    const error = new Error('Fuckup');
    mockAxios.get.mockImplementationOnce(() => Promise.reject(error));
    const cc = await Api.getCryptoCurrenciesList();
    expect(cc).toEqual(error);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(`${CRYPRO_COMPARE_NEW_API}/data/all/coinlist`);
  });
});
