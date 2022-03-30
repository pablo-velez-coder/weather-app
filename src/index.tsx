import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ForecastProvider } from 'context/provider';
import './index.css';
import 'react-loading-skeleton/dist/skeleton.css'
import 'antd/dist/antd.css'

ReactDOM.render(
  <React.StrictMode>
    <ForecastProvider>
    <App />
    </ForecastProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
