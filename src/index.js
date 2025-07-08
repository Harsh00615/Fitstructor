import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Shopp from './Shopp';
import ShopContextProvider from './Context/ShopContextProvider';  
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>     
      <App />
    </BrowserRouter>
  </React.StrictMode>
 
);

reportWebVitals();
