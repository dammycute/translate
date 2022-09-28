import React from 'react'
import location from '../img/location.svg'
import Underline from './Underline'
import msg from '../img/mail.svg'
import call from '../img/call.svg'
import instagram from '../img/instagram.svg'
import facebook from '../img/facebook.svg'
import linkedin from '../img/linkedin.svg'
import twitter from '../img/twitter.svg'
import send from '../img/carbon_send-alt-filled.svg'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-ctn">
            <div className="contact-text">
                <Underline/>
                <h3>Get in Touch with us</h3>
                <p>We would love to hear from you, kindly send us a message.</p>
                <div className="text-ctn">
                    <img className='icon' src={location} alt="gps" />
                    <div className="text-desc">
                        <h4>Location</h4>
                        <p>4140 Parker Rd. Alentown, Mexico 31134</p>    
                    </div>   
                </div>   
                <div className="text-ctn">
                    <img className='icon' src={msg} alt="msg-icon" />
                    <div className="text-desc">
                        <h4>Email</h4>
                        <p>info@translate.com</p>
                    </div>   
                </div> 
                <div className="text-ctn">
                    <img className='icon' src={call} alt="call-icon" />
                    <div className="text-desc">
                        <h4>Call</h4>
                        <p>(+234) 00 000 0000</p>
                        <div className="social-link">
                            <img src={instagram} alt="" /> 
                            <img src={twitter} alt="" />  
                            <img src={linkedin} alt="" />
                            <img src={facebook} alt="" />
                        </div>
                    </div>   
                </div> 
                
            </div>

            <div className="contact-form">
                <form action="">
                    <label htmlFor="">Name</label><br />    
                    <input type="text" name="Name"/><br />
                    <label htmlFor="Email">Email</label><br />
                    <input type="email" name="Email" id="" /><br />
                    <label htmlFor="Message">Message</label><br />
                    <textarea name="Msg" id="" cols="30" rows="10"></textarea><br />
                    <div className="btn"><button>Submit <img src={send} alt="" /></button></div>
                </form>
            </div>    
        </div>
    </div>
  )
}

export default Contact