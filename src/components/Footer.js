import React from 'react'
import logo from '../img/logo1.svg';
import instagram from '../img/instagram1.svg'
import facebook from '../img/facebook1.svg'
import linkedin from '../img/linkedin1.svg'
import twitter from '../img/twitter1.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-ctn">
            <div className="logo">
                <img src={logo} alt="" />    
            </div>
            <div className="nav">
              <li><a href="#">Home</a></li>
              <li><a href="#solution">Our Solution</a></li>
              <li><a href="#about">About us</a></li>
              <li><a href="#faq">FAQs</a></li>
              <li><a href="#contact">Contact us</a></li>  
            </div>
            <div className="social-list">
              <img src={instagram} alt="" /> 
              <img src={twitter} alt="" />  
              <img src={linkedin} alt="" />
              <img src={facebook} alt="" />
            </div>
            <div className="copy">
              <p>&#169; Translate. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer