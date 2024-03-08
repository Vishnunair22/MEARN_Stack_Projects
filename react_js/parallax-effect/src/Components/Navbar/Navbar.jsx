import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        {/* logo */}
        <div className="logo">
            <span className="icon"><i class="fa-solid fa-car"></i></span>
            <span className="title1">Your</span>
            <span className="title2">Ride</span>
        </div>
        <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">Choices</a>
            <button>Contact Us</button>
        </div>
    </nav>
  )
}

export default Navbar