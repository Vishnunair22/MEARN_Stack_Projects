import React from 'react';
import './App.css';

function App() {
  const handleButtonClick = (value) => {
    document.getElementById('display').value += value;
  };

  const handleClear = () => {
    document.getElementById('display').value = '';
  };

  const calculateResult = () => {
    const result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  };

  return (
    <div className="container">
      <h1>
        <i className="fa-solid fa-calculator"></i> Calculator
      </h1>
      <div className="calculator">
        <input type="text" name="display" id="display" />
        <div>
          <button onClick={() => handleButtonClick('(')}>(</button>
          <button onClick={() => handleButtonClick(')')}>)</button>
          <button onClick={() => handleClear()}>DE</button>
          <button onClick={() => handleButtonClick('/')} aria-label="divide">
            <i className="fa-solid fa-divide"></i>
          </button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('*')} aria-label="multiply">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('-')} aria-label="minus">
            <i className="fa-solid fa-minus"></i>
          </button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('+')} aria-label="plus">
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <div>
          <button onClick={() => handleClear()}>AC</button>
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={() => calculateResult()} aria-label="result">
            <i className="fa-solid fa-equals"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
