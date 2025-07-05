import React from 'react';
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className='newsLetter'>
         <h1>Get Exclusive Offers on your Email</h1>
         <p>Subscribe to our newsLetter and stay updated</p>
         <div className='EmailId'>
            <input type="text" placeholder='Your Email id'/>
            <button>Subscribe</button>
         </div>
    </div>
  )
}
export default NewsLetter;