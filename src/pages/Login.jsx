import React, { useContext, useState } from "react";
import "../pages/CSS/login.css";
import { data, useNavigate } from "react-router-dom";
import { AppContent } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
export const Login = () => {
  const navigate = useNavigate(); 
  const {backendUrl , setIsLoggedIn , getUserData} = useContext(AppContent)

  const [mode, setMode] = useState("login"); // login | signup | forgot
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // const handleSubmit = async (e) => {
  //   // e.preventDefault();
  //   // if (mode === "login") {
  //   //   // console.log("Logging in with:", formData.email, formData.password);

  //   // } else if (mode === "signup") {
  //   //   console.log("Signing up with:", formData.name, formData.email, formData.password);
  //   // } else if (mode === "forgot") {
  //   //   console.log("Sending password reset to:", formData.email);
  //   // }
  //   try{
  //     e.preventDefault();
      
  //     axios.defaults.withCredentials = true;
  //     if(mode == "singup") {
  //       const {data} = await axios.post(backendUrl + '/api/auth/register' , formData);
  //       if(data.success) {
  //         setIsLoggedIn(true);
  //         getUserData()
  //         navigate('/')
  //       } else {
  //         toast.error(data.message);
  //       }
  //     } else if(mode == "login"){
  //       const { data } = await axios.post(backendUrl + '/api/auth/login', {
  //         email: formData.email,
  //         password: formData.password,
  //       });
  //       if(data.success) {
  //         setIsLoggedIn(true);
  //         getUserData()
  //         navigate('/');
  //         toast.success('logged in successfully');
  //       } else {
  //         toast.error(data.message);
  //       }
  //     }
  //   } catch(error) {
  //         toast.error(data.message);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      axios.defaults.withCredentials = true;
  
      if (mode === "signup") {
        console.log("Sending signup data:", formData);
  
        const { data } = await axios.post(`${backendUrl}/api/auth/register`, formData);
  
        console.log("Signup response:", data);
  
        if (data.success) {
          setIsLoggedIn(true);
          await getUserData();
          toast.success("Signed up successfully!");
          navigate("/");
        } else {
          toast.error(data.message || "Signup failed");
        }
  
      } else if (mode === "login") {
        console.log("Sending login data:", formData);
  
        const { data } = await axios.post(`${backendUrl}/api/auth/login`, {
          email: formData.email,
          password: formData.password,
        });
  
        console.log("Login response:", data);
  
        if (data.success) {
          setIsLoggedIn(true);
          await getUserData();
          toast.success("Logged in successfully!");
          navigate("/");
        } else {
          toast.error(data.message || "Login failed");
        }
      }
  
    } catch (error) {
      console.error("Error in auth:", error);
      toast.error(error?.response?.data?.message || error.message || "Something went wrong");
    }
  };
  


  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="auth-title">
          {mode === "login"
            ? "Login to FitStructor"
            : mode === "signup"
            ? "Sign up for FitStructor"
            : "Reset your password"}
        </h2>

        {mode === "signup" && (
          <>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </>
        )}

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {mode !== "forgot" && (
          <>
            <label>{mode === "login" ? "Password" : "Create Password"}</label>
            <input
              type="password"
              name="password"
              placeholder={
                mode === "login" ? "Enter your password" : "Create a new password"
              }
              value={formData.password}
              onChange={handleChange}
              required
            />
          </>
        )}

        <button type="submit">
          {mode === "login"
            ? "Login"
            : mode === "signup"
            ? "Sign Up"
            : "Send Reset Link"}
        </button>

        {mode === "login" && (
          <p className="forgot-password" onClick={()=> navigate('/ResetPassword')}>
            Forgot password?
          </p>
        )}

        <p className="auth-footer">
          {mode === "login" && (
            <>
              Don't have an account?{" "}
              <span onClick={() => setMode("signup")}>Sign up</span>
            </>
          )}

          {mode === "signup" && (
            <>
              Already have an account?{" "}
              <span onClick={() => setMode("login")}>Login</span>
            </>
          )}

          {mode === "forgot" && (
            <>
              Go back to{" "}
              <span onClick={() => setMode("login")}>Login</span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};
