import React from 'react'
import Underline from './Underline'
import phone from '../img/Frame 53.svg'

const Solution = () => {
  return (
    <div>
        <div className="solution-ctn">
            <div className="solution-text">
                <Underline/>
                <h3>Our Solution</h3>
                <p>To tackle the problem of language diversity, we at translate employ the use of an AI driven external hardware that translates conversations in real time and a mobile application to listen to the translated output. Amazing right? Yea, We thought so too, check out <b>what we offer</b></p>
                <p className='checked'><i class="bi bi-check"></i><span>Seamless conversations between individuals who speak/understand different languages</span> </p>
                <p><i class="bi bi-check"></i> Enhanced communication in physical and virtual events</p>
                <p><i class="bi bi-check"></i> Aid communication with physically chanllenged persons (deaf or dumb)</p>
                <p><i class="bi bi-check"></i> Help users learn new languages</p>
            </div>

            <div className="solution-img">
                <img src={phone} alt="" />    
            </div>
        </div>
    </div>
  )
}

export default Solution


