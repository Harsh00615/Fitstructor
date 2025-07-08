import React, { useContext } from 'react';
import "../Navbar/Navbar.css";
import logo from "../Assets/Fitstructor.png";
import {Link, useNavigate} from "react-router-dom";
import user from "../Assets/user.png";
import cart from "../Assets/cart.png";
import { AppContent } from '../../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

export const Navbar = () => {
  const {userData , backendUrl , setUserData , setIsLoggedIn} = useContext(AppContent)
  const navigate = useNavigate();

  const sendVerificationOtp = async () => {
    try {
       axios.defaults.withCredentials = true;

       const {data} = await axios.post(backendUrl + '/api/auth/send-verify-otp');
       if(data.success) {
         toast.success(data.message)
        navigate('/EmailVerify');
       } else {
        toast.error(data.message)
       }
    } catch (error) {
        toast.error(error.message);
    }
  }
 
  const logout = async ()=> {

    try {
      
      axios.defaults.withCredentials = true;
      const {data} = await axios.post(backendUrl + '/api/auth/logout');
      if(data.success) {
        setIsLoggedIn(false);
        setUserData(false);
        navigate('/Login')
      }
    } catch (error) {
        toast.error(error.message);
    }
  }
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

        {userData ? (
    <div className="user-initial-container">
      {userData.name[0].toUpperCase()}
      <div className="dropdown-menu">
        <ul className="dropdown-list">
          {!userData.isAccountVerified && <li onClick={sendVerificationOtp} className="dropdown-item">Verify email</li>}
          <li onClick={logout} className="dropdown-item">Logout</li>
        </ul>
      </div>
    </div>
  ):<img src={user} alt ="user" onClick={()=> navigate('/login')}/>}           
        </div>
    </div>
  )
}
 