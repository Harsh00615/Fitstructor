import React from 'react';
import "./offers.css";
import Exclusive_image from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="Offers">
        <div className="Offers_left">
               <h1>Exclusive</h1>
               <h1>Offers For You</h1>
               <p>ONLY ON BEST SELLER PRODUCTS</p>
               <button>Check Out</button>
        </div>
        <div className="Offers_right">
            <img src ={Exclusive_image}/>
        </div>
    </div>
  )
}
export default Offers;