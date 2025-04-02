import React from 'react';
import "../Navbar/Navbar.css";
import logo from "../Assets/Fitstructor.png";
import {Link} from "react-router-dom";
import user from "../Assets/user.png";
import cart from "../Assets/cart.png";


export const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className="navbar-logo">
            <img alt="logo" src = {logo}/>
            <p>FitStructor</p>
        </div>
        <ul className='nav-logo-menu'>
           <li>Fitness<hr/></li>
           <li>Fit+<hr/></li>
           <li>Store<hr/></li>
        </ul>
        <div className="nav-login-cart">
            <img src={user} alt ="user"/>
            <img src={cart} alt="cart"/>
            <div className='nav-cart-count'>0</div>
        </div>
    </div>
  )
}
