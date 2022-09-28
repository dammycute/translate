import React from 'react'
import who from '../img/Group 1.svg'
import Underline from './Underline'

const Who = () => {
  return (
    <div className='who'>
        <div className="who-ctn">
            <div className="who-img">
                <img src={who} alt="" />    
            </div> 
            <div className="who-text">
                <Underline/>
                <h3>Who we are</h3>
                <p><b className="who-pri">Translate</b> is a communication startup made up of intellectuals who are passionate about changing their world and also dissolving the language barricade in individual conversation as well as collective discussions using technology.</p>    
            </div>   
        </div>
    </div>
  )
}

export default Who