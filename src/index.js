// @flow
import './assets/index.css';
import 'antd/dist/antd.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './components/App';

const rootElement = document.getElementById('root');

if (rootElement instanceof HTMLElement) {
  ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
} else {
  throw new Error('Seems like there is problem with rootElement, check index.html file in public dir.');
}
