import React from 'react'
import './Options.css'
import Carousel from '../Carousel/Carousel'
import { Parallax } from 'react-parallax'

const Options = () => {
  return (
    <div className='options'>
    <Parallax strength={400} blur={{min:-5, max:15}}>
        <h2>Explore Our Options</h2>
        <Carousel/>
    </Parallax>
    </div>
  )
}

export default Options