import React from 'react'
import './Hero.css'
import { Parallax } from 'react-parallax'
import car1 from  '../../images/car1.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <Parallax strength={600} bgImage={car1}>
            <div className="content">
                <div className="txt">
                    <h1>Rent your next ride with us</h1>
                    <button>Explore Rides</button>
                </div>
            </div>
        </Parallax>
    </div>
  )
}

export default Hero