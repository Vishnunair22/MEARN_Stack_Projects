import React from 'react';
import './Carousel.css';
import BootstrapCarousel from 'react-bootstrap/Carousel'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import car2 from '../../images/car2.jpg';
import car3 from '../../images/car3.jpg'
import car4 from '../../images/car4.jpg'
import car5 from '../../images/car5.jpg'

const MyCarousel = () => {
  return (
    <BootstrapCarousel className='img-box'>
      <BootstrapCarousel.Item>
        <img src={car2} alt="First slide" />
        <BootstrapCarousel.Caption>
          <h3>Choose your ride</h3>
          <p>Pick a ride from our wide range of options.</p>
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>
      <BootstrapCarousel.Item>
        <img src={car3} alt="First slide" />
        <BootstrapCarousel.Caption>
          <h3>Make the journey matter</h3>
          <p>Select a stunning vehicle that suits you the most.</p>
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>
      <BootstrapCarousel.Item>
        <img src={car4} alt="First slide" />
        <BootstrapCarousel.Caption>
          <h3>Make the miles count</h3>
          <p>We will ensure that your journey is smooth.</p>
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>
      <BootstrapCarousel.Item>
        <img src={car5} alt="First slide" />
        <BootstrapCarousel.Caption>
          <h3>Choose your ride with us</h3>
          <p>Pick a ride and start your journey.</p>
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>
    </BootstrapCarousel>
  );
}

export default MyCarousel;
