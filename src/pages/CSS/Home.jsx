import React, { useContext } from "react";
import Banner from "./Banner";
import { Slider } from "../Slider";
import { ImgComponent } from "../ImgComponent";
import { Navbar } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { AppContent } from "../../context/AppContext";
const Home= () => {

  const {userData} = useContext(AppContent);
    return (
        <div>
          <Navbar/>
         <Banner/>
         {/* <Slider/> */}
         <ImgComponent/>
          <Footer/>
        </div>
      );
    };

    export default Home;
