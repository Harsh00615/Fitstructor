import './App.css';
import Navbar from './Components/Navbar/Navbarshop';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Shop } from './Pages/Shop';
import { Cart } from './Pages/Cart';
import { Product } from './Pages/product';

import { ShopProduct } from './Pages/ShopProduct';
import { ShopCategory } from './Pages/ShopCategory';
import Footer from './Components/Footer/Footer';
import ShopContextProvider from './Context/ShopContextProvider';
import banner_men from "./Components/Assets/banner_mens.png";
import banner_women from "./Components/Assets/banner_women.png";
import banner_kids from "./Components/Assets/banner_kids.png";

function App() {
  return (
    <>
    <ShopContextProvider>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path="/mens" element={<ShopCategory banner = {banner_men} category="men"/>}></Route>
        <Route path="/Womens" element={<ShopCategory banner = {banner_women} category="women"/>}></Route>
        <Route path="/kids" element={<ShopCategory banner = {banner_kids} category="kid"/>}></Route>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/> 
        </Route>
      
        <Route path='/ShopProduct' element={<ShopProduct/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
    </ShopContextProvider>
    </>
  );
}

export default App;
