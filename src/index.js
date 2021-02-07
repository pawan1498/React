import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App'
import Main from './Main'
ReactDOM.render(
  <BrowserRouter>
    <App/>
    <Main/>
  </BrowserRouter>
  , document.getElementById('header'),
);

// ReactDOM.render(
//   <BrowserRouter>
//   <
//    <Main/> 
//   </BrowserRouter>
//   ,document.getElementById('root'),
//   );