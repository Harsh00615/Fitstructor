import React from "react";
import Banner from "./Banner";
import { Slider } from "../Slider";
import { ImgComponent } from "../ImgComponent";
const Home= () => {
    return (
        <div>
         <Banner/>
         {/* <Slider/> */}
         <ImgComponent/>
        </div>
      );
    };

    export default Home;
