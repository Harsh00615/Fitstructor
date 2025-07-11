import './App.css';
import Footer from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import Home from './pages/CSS/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { EmailVerify } from './pages/EmailVerify';
import { ResetPassword } from './pages/ResetPassword';
import { Login } from './pages/Login';
import { ToastContainer } from 'react-toastify';
import MainLayout from './MainLayout';
import Shopp from './Shopp';

function App() {
  return (
    <>
    <BrowserRouter>
    <ToastContainer/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/EmailVerify' element={<EmailVerify/>}/>
        <Route path='/ResetPassword' element={<ResetPassword/>}/>
         <Route path="/shop/*" element={<Shopp />} />
    </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;

