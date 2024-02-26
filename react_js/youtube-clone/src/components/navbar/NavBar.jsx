import React from 'react'
import './navbar.css'
import menu from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import upload from '../../assets/upload.png'
import more from '../../assets/more.png'
import notification from '../../assets/notification.png'
 
function NavBar() {
  return (
    <nav className='flex-div'>
        <div className="nav-left flex-div">
            <img className='menu-icon' src={menu} alt="menu" />
            <img className='logo' src={logo} alt="youtube" />
        </div>
        <div className="nav-middle flex-div">
            <div className="search-box flex-div">
                <input type="text" placeholder='Search' />
                <img src={search} alt="search" />
            </div>
           
        </div>
        <div className="nav-right flex-div">
            <img src={upload} alt="upload" />
            <img src={more} alt="more" />
            <img src={notification} alt="notification" />
            <span><i class="fa-solid fa-user"></i></span>
        </div>
    </nav>
  )
}

export default NavBar