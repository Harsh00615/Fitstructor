import React from 'react';
import '../Footer/Footer.css'; // Import the CSS file
import logo from "../Assets/Fitstructor.png";
import twitter from "../Assets/twitter.png";
import instagram from "../Assets/instagram.png";
import youtube from "../Assets/youtube.png";
import linkedin from "../Assets/linkedin.png";
const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className='footer-logo'>
                <img src={logo} alt ="logo"/>
                <h1>Fitstructor</h1>
                <p>
                At Fitstructor, we bring excitement to group workouts, ensure 
                your daily meals are both nutritious and delicious, make 
                mental wellness simple with yoga and meditation, and 
                provide seamless medical and lifestyle care. #BeBetterEveryDay
                </p>
                </div>
                <div className="footer-links">
                    <ul>
                        <li><a href="#">contact us</a></li>
                        <li><a href="#">blogs</a></li>
                        <li><a href="#">privacy policy</a></li>
                        <li><a href="#">security</a></li>
                        <li><a href="#">Fit+ bmi calculator</a></li>
                        <li><a href="#">careers</a></li>
                        <li><a href="#">terms & conditions</a></li>
                    </ul>
                </div>
                <div className='footer-feedback'>
                    <h2>Feedbacks appriciated</h2>
                    <textarea rows="8" cols="60" placeholder='your feedback '/>
                <div className="footer-socials">
                    <a href="#"><img src={youtube} alt="YouTube" /></a>
                    <a href="#"><img src={twitter} alt="X" /></a>
                    <a href="#"><img src={instagram} alt="Instagram" /></a>
                    <a href="#"><img src={linkedin} alt="LinkedIn" /></a>
                </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;