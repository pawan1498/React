import React from 'react';
import { Link } from "react-router-dom";
import logo from './webappraise.png'
import SearchIcon from '@material-ui/icons/Search';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "tachyons";
import './Header.css';
import Login from './Login'

const Navbar = () => {
    function login() {
        console.log("login");
        return (<Login/>);
    
    }
    return (
        <>
            <div className=" main db bg-light-blue ">
                <img className="dib  ml3 pa2 grow" src={logo} alt="web appraise"></img>
                <ul className=" dib " id="a">
                    <li className="dib  ma2 "> <Link to="/">HOME </Link></li>

                    <div className="dropdown">
                        <li className="dib  ma2 dropbtn " > <Link to="/service">SERVICE</Link></li>
                        <div className="dropdown-content">
                            <Link to="/service/link1">link 1</Link>
                            <Link to="/service/link2">link 2</Link>
                            <Link to="/service/link3">link 3</Link>
                            <Link to="/login">login</Link>
                            <Link to="/user">user</Link>
                            <br></br>
                        </div>
                    </div>
                    <li className="dib  ma2 "> <Link exact to="/about">ABOUT</Link>  </li>
                    <li className="dib  ma2 "> <Link exact to="/contact">CONTACT</Link> </li>
                    <li className="dib  ma2 "><a href="/search">SEARCH <SearchIcon /> </a></li>
                    <button className="dib btn btn-primary ml3 grow" onClick={<login/>} > login </button>
                </ul>
            </div>
        </>
    );

}

// yha link declare hota h 

export default Navbar;
