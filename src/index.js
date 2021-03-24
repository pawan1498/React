import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Header from './Header'

ReactDOM.render(
  <BrowserRouter>
    <Header />
  </BrowserRouter>
  , document.getElementById('root'),
);