import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import CancelIcon from '@material-ui/icons/Cancel';
import Footer from './Footer'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "tachyons";
import './Navbar.css';
import { Brightness1 } from '@material-ui/icons';
const search = () => {
  console.log(1);
  var btn = document.getElementById('input');
  var cancel = document.getElementById('cancel');
  var search = document.getElementById('search');

  btn.style.display = "none";
  if (btn.style.display === "none") {
    cancel.style.display ="inline-flex"
    btn.style.display = "inline-flex";
    search.style.display = "none";
  } 
}
const cancel = ()=>{
  console.log(2);
  var btn = document.getElementById('input');
  var cancel = document.getElementById('cancel');
  var search = document.getElementById('search');
  cancel.style.display ="none"
  btn.style.display = "none";
  search.style.display = "inline-flex";
}
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
            <div>
            <input  id="input" className="input form-control "  type="search" placeholder="Search" aria-label="Search"   />
            <button id="cancel" className="btn btn-navbar" onClick={cancel}><CancelIcon/></button>
            </div>
            <button id="search"className="btn btn-navbar"  type="submit" onClick={search}><SearchIcon /></button>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">login</button>
          </form>
        </div>
      </nav>

    <Footer/> 
    </>
  );
}
export default Navbar;
