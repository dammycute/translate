import React from 'react'
import translate from '../img/second.svg'
import Underline from './Underline'
const Translate = () => {
  return (
    <div className='translate'>
        <div className="translate-img">
            <img src={translate} alt="" />    
        </div>
        <div className="translate-text">
              <Underline/>
              <h3>Why Translate?</h3>
              <p>How would you feel if any language could be translated into a language you understand in your hearing in real time communication. Language barrier limits any form of communication, and not only the communication of words, but ideas which leads to solutions, which in turn brings about revolution. That is to say, that there is power in communication</p> 
        </div>
    </div>
  )
}

export default Translate

