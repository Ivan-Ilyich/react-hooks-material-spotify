import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import App from './App';
import configureStore from './app/redux/reducers/index';

const store = configureStore();
console.log('🚀 ~ file: index.jsx ~ line 8 ~ store', store);

ReactDOM.render(
  // <Provider store={store}>
  <App />,
  // </Provider>,
  document.getElementById('root'),
);
