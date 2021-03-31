import React from 'react';
import { Link } from "react-router-dom";
// import logo from './webappraise.png'
import SearchIcon from '@material-ui/icons/Search';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "tachyons";
import './Navbar.css';
import Login from './Login'
import onclick from './Onclick'

const Navbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#">LOGO</a>

          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Categories</a>
            </li>
           
          </ul>

          <form className=" form-inline my-2 my-lg-0">
            {/* <div id="div1">pawan</div> */}
            <button className=" btn btn-navbar" id="btn1" type="submit" onClick={onclick()}>
              <SearchIcon />
            </button>
            <input className="form-control mr-sm-2" id="input" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">login{Login}</button>
          </form>
        </div>
      </nav>


    </>
  );

}
export default Navbar;
