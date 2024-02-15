import React from 'react'
import './hero.css';

function HeroPart() {
  return (
    <div className='hero'>
        <div className="txt-col">
        <h1>Watch anything on Anime Hub</h1>
        <p>Catch a wide range of animes from different genres and <br />Enjoy countless moments of pure entertainment.</p>
        </div>
        <div className="img-col">
            <img src="https://aniwatchtv.to/images/anw-min.webp" alt="watch popular animes here" />
        </div>
    </div>
  )
}

export default HeroPart