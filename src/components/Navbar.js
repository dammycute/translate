import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../img/logo.svg'


const Navbar = () => {
  return (
    <nav className="navbar">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="nav-container">
                <NavLink class='nav-logo' exact to='/'>
                    <img src={logo} alt="Logo img" />
                    </NavLink>

                    <ul>
                        <li>
                            <NavLink exact to='/' className="active nav-links">
                                Home
                            </NavLink>
                        </li>
                        <div className='hover-li'></div>
                        <li>
                            <NavLink exact to='/' className="nav-links">
                                Our Solution
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to='/' className="nav-links">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to='/' className="nav-links">
                                FAQs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to='/' className="nav-links">
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </div>    
        </div>
    </nav>
  )
}

export default Navbar