import React, { useEffect, useRef } from 'react';
import { AppContent } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import '../pages/CSS/EmailVerify.css';
import { getUserData } from '../Server/controller/userController';

export const EmailVerify = () => {
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const { backendUrl , isLoggedIn , getUserData , userData} = React.useContext(AppContent);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpArray = inputRefs.current.map((input) => input.value);
    const otp = otpArray.join('');

    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(`${backendUrl}/api/auth/verify-account`, { otp });

      if (data.success) {
        toast.success(data.message);
        getUserData();
        navigate('/');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };
   
  useEffect (() => {
      isLoggedIn && userData && userData.isAccountVerified && navigate('/')
  },[isLoggedIn , userData])
  return (
    <div className="otp-container">
      <form className="otp-form" onSubmit={handleSubmit}>
        <h2>Verify Your Email</h2>
        <p>Enter the 6-digit OTP sent to your email</p>
        <div className="otp-inputs">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              ref={(el) => (inputRefs.current[i] = el)}
              onChange={(e) => {
                if (e.target.value && i < 5) {
                  inputRefs.current[i + 1].focus();
                }
              }}
              required
            />
          ))}
        </div>
        <button type="submit">Verify</button>
      </form>
    </div>
  );
};
