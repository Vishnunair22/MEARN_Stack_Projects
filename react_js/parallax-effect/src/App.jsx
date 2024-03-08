import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Options from './Components/Options/Options';
import Carousel from './Components/Carousel/Carousel';
import About from './Components/About/About';

const App = () => {
  return (
    <>
      <header>
        <Navbar/>
        <Hero/>
      </header>
      <main>
        <About/>
        <Options/>
      </main>
    </>
  );
};

export default App;
