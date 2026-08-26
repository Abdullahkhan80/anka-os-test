"use client";

import React, { useState } from 'react';
import '../styles/calculator.css';

const Calculator: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const handleButtonClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult(null);
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handlePercentage = () => {
    try {
      const evaluatedResult = Function(`'use strict'; return (${input}) / 100`)();
      setResult(evaluatedResult);
    } catch (error) {
      setResult(null);
      alert('Invalid expression');
    }
  };

  const handleCalculate = () => {
    try {
      const evaluatedResult = Function(`'use strict'; return (${input})`)();
      setResult(evaluatedResult);
    } catch (error) {
      setResult(null);
      alert('Invalid expression');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="result">{result !== null ? `= ${result}` : ''}</div>
      </div>
      <div className="buttons">
        {['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '+', '-', '*', '/', '.'].map((btn) => (
          <button key={btn} onClick={() => handleButtonClick(btn)}>{btn}</button>
        ))}
        <button onClick={handleClear}>C</button>
        <button onClick={handleBackspace}>⌫</button>
        <button onClick={handlePercentage}>%</button>
        <button onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
