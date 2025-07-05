// import './App.css';
// import Navbar from './components/Navbarshop/Navbar';
// import {BrowserRouter,Routes,Route} from "react-router-dom";
// import { Shop } from './pages/Shop';
// import { Cart } from './pages/Cart';
// import { Product } from './pages/Product';

// import { ShopProduct } from './pages/ShopProduct';
// import { ShopCategory } from './pages/ShopCategory';
// import Footer from './components/Footer/Footer';
// import ShopContextProvider from './Context/ShopContextProvider';
// import banner_men from "./components/Assets/banner_mens.png";
// import banner_women from "./components/Assets/banner_women.png";
// import banner_kids from "./components/Assets/banner_kids.png";

// function Shopp() {
//   return (
//     <>
//     <ShopContextProvider>
//     <BrowserRouter>
//       <Navbar/>
//       <Routes>
//         <Route path='/' element={<Shop/>}/>
//         <Route path="/mens" element={<ShopCategory banner = {banner_men} category="men"/>}></Route>
//         <Route path="/Womens" element={<ShopCategory banner = {banner_women} category="women"/>}></Route>
//         <Route path="/kids" element={<ShopCategory banner = {banner_kids} category="kid"/>}></Route>
//         <Route path='/Cart' element={<Cart/>}/>
//         <Route path='/Product' element={<Product/>}>
//         <Route path=':productId' element={<Product/>}/> 
//         </Route>
      
//         <Route path='/ShopProduct' element={<ShopProduct/>}/>

//       </Routes>
//       <Footer/>
//     </BrowserRouter>
//     </ShopContextProvider>
//     </>
//   );
// }

// export default Shopp;
import './App.css';
import Navbar from './components/Navbarshop/Navbar';
import { Routes, Route } from "react-router-dom";    // ✅ Removed BrowserRouter here
import { Shop } from './pages/Shop';
import Cart from './pages/Cart';                      // ✅ Default import (remove curly braces)
import Product from './pages/Product';                // ✅ Default import
import ShopProduct from './pages/ShopProduct';        // ✅ Default import
import ShopCategory from './pages/ShopCategory';      // ✅ Default import
import Footer from './components/Footer/Footer';
import ShopContextProvider from './Context/ShopContextProvider';
import banner_men from "./components/Assets/banner_mens.png";
import banner_women from "./components/Assets/banner_women.png";
import banner_kids from "./components/Assets/banner_kids.png";

function Shopp() {
  return (
    <ShopContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path="/mens" element={<ShopCategory banner={banner_men} category="men" />} />
        <Route path="/Womens" element={<ShopCategory banner={banner_women} category="women" />} />
        <Route path="/kids" element={<ShopCategory banner={banner_kids} category="kid" />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Product' element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/ShopProduct' element={<ShopProduct />} />
      </Routes>
      <Footer />
    </ShopContextProvider>
  );
}

export default Shopp;

