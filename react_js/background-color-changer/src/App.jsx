import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("blue");

  useEffect(() => {
    document.body.className = color;
  }, [color]);

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <span className="icon"><i className="fa-solid fa-paintbrush"></i></span>
            <span className="wrd1">Background</span><span className="wrd2">Color</span><span className="wrd3">Changer</span>
          </div>
        </nav>
        <div className="hero" style={{ backgroundColor: color }}>
          <h1>Pick a color</h1>
          <p>Choose a color and see the background transform</p>
          <div className="buttons">
            <button onClick={() => changeColor('black')} className="black">Black</button>
            <button onClick={() => changeColor('teal')} className='teal'>Teal</button>
            <button onClick={() => changeColor('green')} className='green'>Green</button>
            <button onClick={() => changeColor('white')} className='white'>White</button>
            <button onClick={() => changeColor('blue')} className='blue'>Blue</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
