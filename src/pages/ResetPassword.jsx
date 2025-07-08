import React, { useState , useRef, useContext } from 'react';
import "../pages/CSS/ResetPassword.css";
import { useNavigate} from 'react-router-dom';
import { AppContent } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

export const ResetPassword = () => {
  
  const {backendUrl} = useContext(AppContent);
  axios.defaults.withCredentials = true;

  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const [email , setEmail] = useState('');
  const [newPassword , setnewPassword] = useState('');
  const [isEmailSent , setisEmailSent] = useState('');
  const [otp,setOtp] = useState(0);
  const [isOtpSubmitted , setIsOtpSubmitted] = useState(false);

  const onSubmitEmail = async (e) => {
        e.preventDefault();
        try {
          const {data} = await axios.post(backendUrl + '/api/auth/reset-otp' , {email})
          if(data.success) {
            toast.success(data.message);
            setisEmailSent(true);
          } else {
            toast.error(data.message);
          }
        } catch (error) {
           toast.error(error.message)
        }
  }

  const onSubmitOtp = async (e) => {
    e.preventDefault();
    const otpArray = inputRefs.current.map(e=> e.value)
    setOtp(otpArray.join(''))
    setIsOtpSubmitted(true);
  }

  const onSubmitNewPassword = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post(backendUrl + "/api/auth/verify-reset-otp" , {email,otp,newPassword});
      if(data.success) {
        toast.success(data.message)
        navigate('/login')
      } else {
        toast.error(data.message)
      }
    } catch (error) {
        toast.error(error.message);
    }
  }  
  
  return (
    <div className="reset-container">

      {/* email sent form */}

      {!isEmailSent && 
    <form onSubmit={onSubmitEmail} className="reset-form">
      <h1 className="reset-title">Reset password</h1>
      <p className="reset-subtitle">Enter your registered email address</p>

      <div className="input-wrapper">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="email-input"
        />
      </div>

      <button type="submit" className="reset-btn">Send OTP</button>
    </form>
}

    {/* OTP verification form */}

    {!isOtpSubmitted && isEmailSent &&
    <form onSubmit={onSubmitOtp} className="otp-form">
        <h2>Enter Your RESET OTP</h2>
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
        <button type="submit">Submit</button>
      </form>
}

   {/* new password form */}
  {isOtpSubmitted && isEmailSent && 
      <form  onSubmit={onSubmitNewPassword} className="reset-form">
      <h1 className="reset-title">Reset password</h1>
      <p className="reset-subtitle">Enter your New Password</p>

      <div className="input-wrapper">
        <input
          type="password"
          placeholder="Enter a New Password"
          value={newPassword}
          onChange={e => setnewPassword(e.target.value)}
          required
          className="email-input"
        />
      </div>

      <button type="submit" className="reset-btn">Submit</button>
    </form>
}
  </div>
  )
}
