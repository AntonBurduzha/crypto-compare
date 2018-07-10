// @flow
import axios from 'axios';
import { CRYPRO_COMPARE_NEW_API } from '../constants';

function getCryptoCurrenciesList() {
  return axios
    .get(`${CRYPRO_COMPARE_NEW_API}/data/all/coinlist`)
    .then(response => response.data.Data)
    .catch(err => err);
}

export default { getCryptoCurrenciesList };
