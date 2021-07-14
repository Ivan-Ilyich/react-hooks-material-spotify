import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DataLayer } from './app/context/store';
// eslint-disable-next-line import/no-named-as-default
import reducer, { initialState } from './app/context/reducer/reducer';

ReactDOM.render(
  <DataLayer initialState={initialState} reducer={reducer}>
    <App />
  </DataLayer>,
  document.getElementById('root'),
);
