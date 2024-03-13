import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://app-54z5asedkue9.frontegg.com', // Substitua pelo URL fornecido pela Frontegg
  clientId: '87689a8d-b5d1-47dd-a5bf-6cd8a0c41033' // Substitua pelo Client ID fornecido pela Frontegg
};

ReactDOM.render(
  <React.StrictMode>
    <FronteggProvider contextOptions={contextOptions}>
      <App />
    </FronteggProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
