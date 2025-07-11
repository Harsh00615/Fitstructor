import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Shopp from './Shopp';
import ShopContextProvider from '../src/context/ShopContextProvider';  
import reportWebVitals from './reportWebVitals';
import AppContextProvider from './context/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContextProvider> 
    <App />
    </AppContextProvider>
  </React.StrictMode>
 
);

reportWebVitals();
