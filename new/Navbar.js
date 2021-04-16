import React from 'react';
import { Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "tachyons";
import './css/Navbar.css';

function showSearch() {
  var srchbtn = document.getElementById("srchbtn");
  srchbtn.style.display = "none"
  var srchbar = document.getElementById("searchbar");
  srchbar.style.display = "block";

  var frm = document.getElementById("form");
  frm.style.display = "flex";
  // frm.style.
}

function closeSearch() {
  var frm = document.getElementById("form");
  var srchbtn = document.getElementById("srchbtn");
  var srchbar = document.getElementById("searchbar");

  srchbar.style.display = "none";
  srchbtn.style.display = "";
  frm.style.display = "none";
}


const Navbar = () => {

  return (
    <>
      <nav>
        <div className="navbar">
          <div className="logo" id="logo"><Link to='/' id="w-t-d-none" >HANDCRAFT</Link> </div>

          <div id="r">

            <div className="srchbtn" id="srchbtn" onClick={showSearch} >   <Link to="/search" id="w-t-d-none" ><i class="fa fa-search" aria-hidden="true" id="sbtn"></i></Link> </div>

            <div className="user"><Link to="/login" id="w-t-d-none" ><i class="fa fa-user-circle" aria-hidden="true"></i></Link></div>

            <div className="user"><Link to="/cart" id="w-t-d-none"   >&nbsp;&nbsp;<i class="fa fa-shopping-cart" aria-hidden="true"></i></Link></div>

          </div>
        </div>

        <div className="searchbar w3-animate-top" id="searchbar">
          <form className="form  " id="form">
            <input className="searchinp form-control" placeholder="&nbsp;&nbsp;&nbsp;Search" />
            <button type="submit" className="btn"><i class="fa fa-search" aria-hidden="true" id="sbtn"></i></button>
            <i class="fa fa-times-circle" aria-hidden="true" id="close" onClick={closeSearch}></i>
          </form>
        </div>

      </nav>
      <br />


    </>
  );

}
export default Navbar;
