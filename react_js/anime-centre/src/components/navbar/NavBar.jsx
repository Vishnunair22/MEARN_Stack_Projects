import React from 'react'
import './navbar.css';

const NavBar = () => {
  return (
    <nav>
        {/* logo */}
        <div className="logo">
            <span className="w-icon"><i class="fa-solid fa-boxes-stacked"></i></span>
            <span className="wrd1">Anime</span>
            <span className="wrd2">Hub</span>
        </div>
        {/* nav links */}
        <div className="nav-links">
            <ul className="nav-item">
                <li><a href="#trending">TRENDING</a></li>
                <li><a href="#popular">POPULAR</a></li>
                <li><a href="#plans">PLANS</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar