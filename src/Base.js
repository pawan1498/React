import React from 'react';
import { Link } from "react-router-dom";

// Components
import Main from './Main'

// StyleSheets
import './css/Footer.css'
import './css/Navbar.css';


function showSearch() {
  var srchbtn = document.getElementById("srchbtn");
  srchbtn.style.display = "none"
  var srchbar = document.getElementById("searchbar");
  srchbar.style.display = "block";

  var frm = document.getElementById("form");
  frm.style.display = "flex";
}

function closeSearch() {
  var frm = document.getElementById("form");
  var srchbtn = document.getElementById("srchbtn");
  var srchbar = document.getElementById("searchbar");

  srchbar.style.display = "none";
  srchbtn.style.display = "";
  frm.style.display = "none";
}


function Base() {
    return (
      <div>
        {/* <Navbar/> */}
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
        {/* <Navbar/> */}

        <Main/>

        {/* <Footer/>  */}
        <footer>
     <div className="footer">
     <div className="fluid ">
        {/* Footer */}
        <footer className="text-center text-lg-start text-dark" style={{backgroundColor: '#ECEFF1'}}>
          {/* Section: Social media */}
          <section className="d-flex justify-content-between p-4 text-white" style={{backgroundColor: '#61b15a'}}>
            {/* Left */}
            <div className="me-5">
              <span>Get connected with us on social networks:</span>
            </div>
            {/* Left */}
            {/* Right */}
            <div className="footer-social">
              <a href className="text-white me-4">
                <i className="fa fa-facebook-f" />
              </a>
              <a href className="text-white me-4">
                <i className="fa fa-twitter" />
              </a>
              <a href className="text-white me-4">
                <i className="fa fa-google" />
              </a>
              <a href className="text-white me-4">
                <i className="fa fa-instagram" />
              </a>
              <a href className="text-white me-4">
                <i className="fa fa-linkedin" />
              </a>
              <a href className="text-white me-4">
                <i className="fa fa-github" />
              </a>
            </div>
            {/* Right */}
          </section>
          {/* Section: Social media */}
          {/* Section: Links  */}
          <section className>
            <div className="container text-center text-md-start mt-5">
              {/* Grid row */}
              <div className="row mt-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* Content */}
                  <h6 className="text-uppercase fw-bold">Company name</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
                  <p>
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Products</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
                  <p>
                    <a href="#!" className="text-dark">MDBootstrap</a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">MDWordPress</a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">BrandFlow</a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">Bootstrap Angular</a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Useful links</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
                  <p>
                    <a href="#!" className="text-dark">Your Account</a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">Become an Affiliate</a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">Shipping Rates</a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">Help</a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}} />
                  <p><i className="fa fa-home mr-3" /> New York, NY 10012, US</p>
                  <p><i className="fa fa-envelope mr-3" /> info@example.com</p>
                  <p><i className="fa fa-phone mr-3" /> + 01 234 567 88</p>
                  <p><i className="fa fa-print mr-3" /> + 01 234 567 89</p>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </section>
          {/* Section: Links  */}
          {/* Copyright */}
          <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
            © 2020 Copyright:
            <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </div>
      {/* End of .container */}
      </div>
      </footer>
        {/* <Footer/>  */}
      </div>
    );
  }
export default Base; 