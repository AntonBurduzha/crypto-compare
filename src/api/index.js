import axios from 'axios';
import { cryptoCompareUrl } from '../constants';

export function getCryptoCurrenciesList() {
  return axios.get(`${cryptoCompareUrl}/datda/all/coinlist`)
    .then(response => response.data);
}
