import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Root from './components/Root';

const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <Root />
  </Provider>
  ), document.getElementById('root'));
