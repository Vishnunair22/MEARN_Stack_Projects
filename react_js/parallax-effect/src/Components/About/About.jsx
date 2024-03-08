import React from 'react'
import './About.css'
import { Parallax } from 'react-parallax'
import about from '../../images/about.jpg'

const About = () => {
  return (
    <div className='about'>
        <Parallax strength={-600} bgImage={about}>
            <div className="content-box">
                <div className="txt">
                    <h2>About Us</h2>
                    <p>We are the leading premium car rental service in India. <br />We provide a wide range of high end cars for you to choose from. <br />We can make your trips easy and memorable. <br />Pick a ride from us and enjoy every minute of your trip. </p>
                </div>
            </div>
        </Parallax>
    </div>
  )
}

export default About