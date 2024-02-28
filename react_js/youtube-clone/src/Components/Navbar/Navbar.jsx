import React from 'react'
import './Navbar.css'
import menu from '../../assets/menu.png'
import youtube from '../../assets/youtube.jpg'
import search from '../../assets/search.png'
import upload from '../../assets/upload.png'
import notification from '../../assets/notification.png'
import more from '../../assets/more.png'
import user_profile from '../../assets/user_profile.jpg'

const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>
        <div className="nav-left flex-div">
            <img src={menu} alt="menu icon" className='menu_icon' onClick={() => setSidebar(prev=>prev===false?true:false)} />
            <img src={youtube} alt="youtube"  className='logo'/>
        </div>
        <div className="nav-middle flex-div">
            <div className="search-box">
                <input type="text" placeholder='Search' />
                <img src={search} alt="search" />
            </div>
        </div>
        <div className="nav-right flex-div">
            <img src={upload} alt="upload" />
            <img src={notification} alt="notification" />
            <img src={more} alt="more" />
            <img src={user_profile} alt="user icon" className='user-icon' />
        </div>
    </nav>
  )
}

export default Navbar