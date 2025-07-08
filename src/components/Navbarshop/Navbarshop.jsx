import React, { useContext } from "react";
import "../Navbarshop/Navbarshop.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { NavLink, useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/ShopContextProvider";

const Navbarshop = () => {
  const { getTotalItems } = useContext(ShopContext);
  const navigate = useNavigate();
  if (!getTotalItems) {
    console.error('getTotalItems is undefined');
    return null;
  }

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img  onClick={() => navigate('/')} src={logo} alt="FitStructor" />
        <p>FitStructor</p>
      </div>

      <ul className="nav-logo-menu">
        <li>
          <NavLink 
            to="/shop" 
            style={{ textDecoration: 'none' }} 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/shop/category/men" 
            style={{ textDecoration: 'none' }} 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            Men
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/shop/category/women" 
            style={{ textDecoration: 'none' }} 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            Women
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/shop/category/kid" 
            style={{ textDecoration: 'none' }} 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            Accessories
          </NavLink>
        </li>
      </ul>

      <div className="nav-login-cart">
        <NavLink to="/shop/cart" style={{ textDecoration: 'none' }}>
          <img src={cart_icon} alt="cart" />
       </NavLink>
        <div className="nav-cart-count">{getTotalItems()}</div>
      </div>
    </div>
  );
};

export default Navbarshop;

