import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WebContextProvider from './context/Context';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <WebContextProvider>
      <App />
    </WebContextProvider>
  
);
