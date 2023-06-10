// import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css'
import './08-useReducer/intro-reducer';

import { MainApp } from './09-useContext/MainApp';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>  
  // Higer Order Component HOC
  <BrowserRouter> 
    <MainApp />
  </BrowserRouter>
  // </React.StrictMode>,
);
