import React from 'react';
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
            <div className="logo"> HANDCRAFT</div>

            <div id="r">

            <div className="srchbtn" id="srchbtn" onClick={showSearch} > <i class="fa fa-search" aria-hidden="true" id="sbtn"></i></div>
            <div className="user"><i class="fa fa-user-circle" aria-hidden="true"></i></div>
            </div>
        </div>

        <div className="searchbar w3-animate-top" id="searchbar">
            <form className="form  " id="form">
              <input className="searchinp form-control"  placeholder="&nbsp;&nbsp;&nbsp;Search" />
              <button type="submit" className="btn"><i class="fa fa-search" aria-hidden="true" id="sbtn"></i></button> 
              <i class="fa fa-times-circle" aria-hidden="true" id="close" onClick={closeSearch}></i>
            </form>
            </div>
      </nav>

    </>
  );
 
}
export default Navbar;



