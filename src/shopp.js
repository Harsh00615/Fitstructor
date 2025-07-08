
// import './Shopp.css';
// import Navbar from './components/Navbarshop/Navbarshop';
// import { Routes, Route } from "react-router-dom";
// import Cart from './pages/Cart';                     
// import Product from './pages/product';              
// import ShopProduct from './pages/ShopProduct';       
// import ShopCategory from './pages/ShopCategory';
// import ShopContextProvider from './Context/ShopContextProvider';
// import banner_men from "./components/Assets/banner_mens.png";
// import banner_women from "./components/Assets/banner_women.png";
// import banner_kids from "./components/Assets/banner_kids.png";
// import Shop from './pages/Shop';                     

// function Shopp() {
//   return (
//     <ShopContextProvider>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Shop />} />
//         <Route path="/mens" element={<ShopCategory banner={banner_men} category="men" />} />
//         <Route path="/Womens" element={<ShopCategory banner={banner_women} category="women" />} />
//         <Route path="/kids" element={<ShopCategory banner={banner_kids} category="kid" />} />
//         <Route path='/Cart' element={<Cart />} />
//         <Route path='/Product' element={<Product />}/>
//         <Route path='/productId' element={<Product />} />
//         <Route path='/ShopProduct' element={<ShopProduct />} />
//       </Routes>
//     </ShopContextProvider>
//   );
// }


// export default Shopp;


import './Shopp.css';
import Navbar from './components/Navbarshop/Navbarshop';
import Footer from './components/Footer/Footer';
import { Routes, Route } from "react-router-dom";
import Cart from './pages/Cart';
import Product from './pages/product';
import ShopCategory from './pages/ShopCategory';
import ShopContextProvider from './Context/ShopContextProvider';
import Shop from './pages/Shop';

function Shopp() {
  return (
    <ShopContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/category/:categoryName" element={<ShopCategory />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Product/:productId" element={<Product />} />
      </Routes>
      <Footer/>
    </ShopContextProvider>
  );
}

export default Shopp;


