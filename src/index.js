import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Base  from './Base'
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <BrowserRouter>
    <Base />
  </BrowserRouter>,
   document.getElementById('root'),
);