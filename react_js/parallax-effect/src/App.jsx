import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Options from './Components/Options/Options';
import Carousel from './Components/Carousel/Carousel';

const App = () => {
  return (
    <>
      <header>
        <Navbar/>
        <Hero/>
      </header>
      <main>
        <Options/>
      </main>
    </>
  );
};

export default App;
