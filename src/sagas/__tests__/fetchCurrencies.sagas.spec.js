import { call, put, takeEvery } from 'redux-saga/effects';
import { notification } from 'antd';
import * as actions from'../../actions';
import { fetchCurrencies, fetchCurrenciesRequest } from '../../sagas/currencies.saga';
import Api from '../../api';

describe('fetchCurrencies saga', () => {
  let generator;
  //do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    generator = fetchCurrencies();
    const callDescriptor = generator.next().value;
    expect(callDescriptor).toEqual(call(Api.getCryptoCurrenciesList));
  });

  it('should dispatch the successCryptoCurrencies action if it requests the data successfully', () => {
    const list = [
      { a: 1 },
      { a: 2 },
      { a: 3 },
    ];
    const putDesctiptor = generator.next(list).value;
    expect(putDesctiptor).toEqual(put(actions.successCryptoCurrencies(list)));
  })

  it('should dispatch the failedCryptoCurrencies action if response was rejected', () => {
    const putDesctiptor = generator.throw().value;
    expect(putDesctiptor).toEqual(put(actions.failedCryptoCurrencies()));

    const errMessage = {
      message: 'Unexpected result!',
      description: 'Something went wrong. Try later or go away from this app.',
    }
    notification.error = jest.fn();
    const callDescriptor = generator.next(errMessage).value;
    expect(callDescriptor).toEqual(call(notification.error, errMessage));
  });
});

describe('fetchCurrenciesRequest saga', () => {
  const generator = fetchCurrenciesRequest();
  it('should start task to watch for FETCH_CRYPTO_CURRENCIES action', () => {
    const takeEveryDescriptor = generator.next().value;
    expect(takeEveryDescriptor).toEqual(takeEvery('FETCH_CRYPTO_CURRENCIES', fetchCurrencies));
  });
});
