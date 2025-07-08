// import React, { useContext } from "react";
// import "../Navbarshop/Navbarshop.css";
// import logo from "../Assets/logo.png";
// import cart_icon from "../Assets/cart_icon.png";
// import { useState , useEffect } from "react";
// import { Link , useLocation} from "react-router-dom";
// import  {ShopContext}  from "../../Context/ShopContextProvider";

// const Navbar = () => {

//   const [menu,setMenu] = useState("shop");
//   const { getTotalItems } = useContext(ShopContext);
//   const location = useLocation();

//   // Automatically update menu based on current path
//   useEffect(() => {
//     if (location.pathname === "/shop") {
//       setMenu("shop");
//     } else if (location.pathname.includes("/shop/category/men")) {
//       setMenu("Men");
//     } else if (location.pathname.includes("/shop/category/women")) {
//       setMenu("Women");
//     } else if (location.pathname.includes("/shop/category/kid")) {
//       setMenu("kids");
//     } else {
//       setMenu("");
//     }
//   }, [location]);

//   if (!getTotalItems) {
//        console.error('getTotalItems is undefined');
//        return null; // Or handle the error appropriately
//      }
//     return (
//        <div className="navbar">
//             <div className="nav-logo">
//               <img src={logo} alt="FitStructor"></img>
//               <p>FitStructor</p>
//             </div>
//             <ul className="nav-logo-menu"> 
//                <li onClick={()=> {setMenu("shop")}}><Link to={"/"} style={{textDecoration : 'none'}}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
//                <li onClick={()=> {setMenu("Men")}}><Link to={"/mens"}  style={{textDecoration : 'none'}}>Men</Link> {menu==="Men"?<hr/>:<></>}</li>
//                <li onClick={()=> {setMenu("Women")}}><Link to={"/Womens"}  style={{textDecoration : 'none'}}>Women</Link> {menu==="Women"?<hr/>:<></>}</li>
//                <li onClick={()=> {setMenu("kids")}}><Link to={"/kids"}  style={{textDecoration : 'none'}}>Accessories</Link> {menu==="kids"?<hr/>:<></>}</li>
//             </ul>
//             <div className="nav-login-cart">
//                 <Link to={"/cart"}  style={{textDecoration : 'none'}}><img src={cart_icon} alt="cart"></img></Link>
//                 <div className="nav-cart-count">{getTotalItems()}</div>
//             </div>
//        </div>
//     )
// }

// export default Navbar;


// import React, { useContext, useState, useEffect } from "react";
// import "../Navbarshop/Navbarshop.css";
// import logo from "../Assets/logo.png";
// import cart_icon from "../Assets/cart_icon.png";
// import { Link, useLocation } from "react-router-dom";
// import { ShopContext } from "../../Context/ShopContextProvider";

// const Navbarshop = () => {
//   const [menu, setMenu] = useState("shop");
//   const { getTotalItems } = useContext(ShopContext);
//   const location = useLocation();

//   // Automatically update menu based on current path
//   useEffect(() => {
//     if (location.pathname === "/shop") {
//       setMenu("shop");
//     } else if (location.pathname.includes("/shop/category/men")) {
//       setMenu("Men");
//     } else if (location.pathname.includes("/shop/category/women")) {
//       setMenu("Women");
//     } else if (location.pathname.includes("/shop/category/kid")) {
//       setMenu("kids");
//     } else {
//       setMenu("");
//     }
//   }, [location]);

//   if (!getTotalItems) {
//     console.error('getTotalItems is undefined');
//     return null; 
//   }

//   return (
//     <div className="navbar">
//       <div className="nav-logo">
//         <img src={logo} alt="FitStructor" />
//         <p>FitStructor</p>
//       </div>

//       <ul className="nav-logo-menu">
//         <li>
//           <Link to="/shop" style={{ textDecoration: 'none' }} onClick={() => setMenu("shop")}>
//             Shop
//           </Link>
//           {menu === "shop" ? <hr /> : <></>}
//         </li>

//         <li>
//           <Link to="/shop/category/men" style={{ textDecoration: 'none' }} onClick={() => setMenu("Men")}>
//             Men
//           </Link>
//           {menu === "Men" ? <hr /> : <></>}
//         </li>

//         <li>
//           <Link to="/shop/category/women" style={{ textDecoration: 'none' }} onClick={() => setMenu("Women")}>
//             Women
//           </Link>
//           {menu === "Women" ? <hr /> : <></>}
//         </li>

//         <li>
//           <Link to="/shop/category/kid" style={{ textDecoration: 'none' }} onClick={() => setMenu("kids")}>
//             Accessories
//           </Link>
//           {menu === "kids" ? <hr /> : <></>}
//         </li>
//       </ul>

//       <div className="nav-login-cart">
//         <Link to="/shop/cart" style={{ textDecoration: 'none' }}>
//           <img src={cart_icon} alt="cart" />
//         </Link>
//         <div className="nav-cart-count">{getTotalItems()}</div>
//       </div>
//     </div>
//   );
// }

// export default Navbarshop;


import React, { useContext } from "react";
import "../Navbarshop/Navbarshop.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { NavLink } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContextProvider";

const Navbarshop = () => {
  const { getTotalItems } = useContext(ShopContext);

  if (!getTotalItems) {
    console.error('getTotalItems is undefined');
    return null;
  }

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="FitStructor" />
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

