import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./__mocks__/browser');
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
