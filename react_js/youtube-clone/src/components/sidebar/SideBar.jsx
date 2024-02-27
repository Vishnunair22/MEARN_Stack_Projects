import React from 'react'
import './sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import cameron from '../../assets/cameron.png'

function SideBar() {
  return (
    <div className='sidebar'>
        <div className="shortcut-links">
            <div className="side-link">
                <img src={home} alt="home" />
                <p>Home</p>
            </div>
            <div className="side-link">
                <img src={game_icon} alt="gaming" />
                <p>Gaming</p>
            </div>
            <div className="side-link">
                <img src={automobiles} alt="automobiles" />
                <p>Automobiles</p>
            </div>
            <div className="side-link">
                <img src={sports} alt="sports" />
                <p>Sports</p>
            </div>
            <div className="side-link">
                <img src={entertainment} alt="entertainment" />
                <p>Entertainment</p>
            </div>
            <div className="side-link">
                <img src={tech} alt="tech" />
                <p>Tech</p>
            </div>
            <div className="side-link">
                <img src={music} alt="music" />
                <p>Music</p>
            </div>
            <div className="side-link">
                <img src={blogs} alt="blogs" />
                <p>Blogs</p>
            </div>
            <div className="side-link">
                <img src={news} alt="news" />
                <p>News</p>
            </div>
            <hr />
        </div>
        <div className="subscribed-list">
            <h3>You're Subscribed to</h3>
            <div className="side-link">
                <img src={jack} alt="jack" />
                <p>EX Sports</p>
            </div>
            <div className="side-link">
                <img src={tom} alt="tom" />
                <p>Tom Edwards</p>
            </div>
            <div className="side-link">
                <img src={simon} alt="simon" />
                <p>Simon Luis</p>
            </div>
            <div className="side-link">
                <img src={megan} alt="megan" />
                <p>Megan Fox</p>
            </div>
            <div className="side-link">
                <img src={cameron} alt="cameron" />
                <p>Cameron williams</p>
            </div>
        </div>
    </div>
  )
}

export default SideBar