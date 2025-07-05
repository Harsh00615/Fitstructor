import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContextProvider";

const Navbar = () => {

  const [menu,setMenu] = useState("shop");
  const {getTotalItems} = useContext(ShopContext);
    return (
       <div className="navbar">
            <div className="nav-logo">
              <img src={logo} alt="FitStructor"></img>
              <p>FitStructor</p>
            </div>
            <ul className="nav-logo-menu"> 
               <li onClick={()=> {setMenu("shop")}}><Link to={"/"} style={{textDecoration : 'none'}}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
               <li onClick={()=> {setMenu("Men")}}><Link to={"/mens"}  style={{textDecoration : 'none'}}>Men</Link> {menu==="Men"?<hr/>:<></>}</li>
               <li onClick={()=> {setMenu("Women")}}><Link to={"/Womens"}  style={{textDecoration : 'none'}}>Women</Link> {menu==="Women"?<hr/>:<></>}</li>
               <li onClick={()=> {setMenu("kids")}}><Link to={"/kids"}  style={{textDecoration : 'none'}}>Accessories</Link> {menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to={"/cart"}  style={{textDecoration : 'none'}}><img src={cart_icon} alt="cart"></img></Link>
                <div className="nav-cart-count">{getTotalItems()}</div>
            </div>
       </div>
    )
}

export default Navbar;