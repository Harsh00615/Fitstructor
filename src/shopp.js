import './Shopp.css';
import Navbar from './components/Navbarshop/Navbarshop';
import Footer from './components/Footer/Footer';
import { Routes, Route } from "react-router-dom";
import Cart from './pages/Cart';
import Product from './pages/product';
import ShopCategory from './pages/ShopCategory';
import ShopContextProvider from '../src/context/ShopContextProvider';
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


