import React from 'react'
import './Options.css'
import Carousel from '../Carousel/Carousel'
import { Parallax } from 'react-parallax'

const Options = () => {
  return (
    <div className='options'>
    <Parallax strength={600} blur={{min:-5, max:15}}>
       <div className="box">
       <h2>Explore Our Options</h2>
        <Carousel/>
       </div>
    </Parallax>
    </div>
  )
}

export default Options