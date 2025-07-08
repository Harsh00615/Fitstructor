import React, { useContext } from "react";
import "../CSS/Banner.css"
import { AppContent } from "../../context/AppContext";

const Banner= () => {

  const {userData} = useContext(AppContent);
      return (
        <div>
          <div className="top">
            <marquee>
            !! FREE 5 Day Fitness Challenge !! <br/>
            !! HEY {userData ? userData.name : `Customer`} !!
            </marquee>
          </div>
        </div>
      );
    };

    export default Banner;
