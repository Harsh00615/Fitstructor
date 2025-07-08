import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const AppContent = createContext();

const AppContextProvider = (props) => {
  
    axios.defaults.withCredentials = true;

  const backendUrl = 'http://localhost:4000';
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(false);

  const getUserData = async ()=> {
    try {
        const {data} = await axios.get(backendUrl + '/api/user/data' , {
            withCredentials:true
        });
        data.success ? setUserData(data.userData) : toast.error(data.message);
    } catch (error) {
        toast.error(error.response?.data?.message || "Something went wrong");
    }
  }

  const getAuthState = async () => {
    try {
        const {data} =  await axios.get(backendUrl + '/api/auth/is-auth');
        if(data.success) {
            setIsLoggedIn(true);
            getUserData();
        }
    } catch (error) {
        toast.error(error.message)
    }
  }

  useEffect( () => {
      getAuthState();
  }, [] )

  const value = {
    backendUrl,
    isLoggedIn,
    setIsLoggedIn,
    userData,
    setUserData,
    getUserData
  };

  return (
    <AppContent.Provider value={value}>
      {props.children}
    </AppContent.Provider>
  );
};

export default AppContextProvider;
