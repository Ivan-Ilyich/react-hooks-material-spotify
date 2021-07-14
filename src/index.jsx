import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DataLayer } from './app/context/store';
import { initialState } from './app/context/reducer/reducer';

ReactDOM.render(
  <DataLayer initialState={initialState}>
    <App />
  </DataLayer>,
  document.getElementById('root'),
);
