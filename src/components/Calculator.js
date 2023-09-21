import React, { useState } from 'react';
import calculate from '../logic/calculator';
import CalculatorDisplay from './CalculatorDisplay';

function Calculator() {
  const [value, setValue] = useState({
    total: '0',
    next: null,
    operation: null,
  });
  const { total, operation, next } = value;

  function clickHandler(num) {
    setValue(calculate(value, num));
  }

  return (
    <div>
      <div className="container">
        <div className="sum-display sum">
          <span>
            <CalculatorDisplay result={next || operation || total || '0'} />
          </span>
        </div>

        <button
          type="button"
          className="white-btn"
          onClick={(e) => clickHandler(e.target.textContent)}
        >
          AC
        </button>
        <button
          type="button"
          className="white-btn"
          onClick={(e) => clickHandler(e.target.textContent)}
        >
          +/-
        </button>
        <button
          type="button"
          className="white-btn"
          onClick={(e) => clickHandler(e.target.textContent)}
        >
          %
        </button>
        <button
          type="button"
          className="orange-btn"
          onClick={(e) => clickHandler(e.target.textContent)}
        >
          &#xf7;
        </button>

        <button
          type="button"
          className="white-btn"
          onClick={(e) => clickHandler(e.target.textContent)}
        >
          7
        </button>
        <button
          type="button"
          className="white-btn"
          onClick={(e) => clickHandler(e.target.textContent)}
        >
          8
        </button>
        <button
          type="button"
          className="white-btn"
          onClick={(e) => clickHandler(e.target.textContent)}
        >
          9
        </button>
        <button
          type="button"
          className="orange-btn"
          onClick={(e) => clickHandler(e.target.textContent)}
        >
          x
        </button>

        <button
          type="button"
          className="white-btn"
          onClick={(e) => clickHandler(e.target.textContent)}
        >
          4
        </button>
        <button
          type="button"
          className="white-btn"
          onClick={(e) => clickHandler(e.target.textContent)}
        >
          5
        </button>
        <button
          type="button"
          className="white-btn"
          onClick={(e) => clickHandler(e.target.textContent)}
        >
          6
        </button>
        <button
          type="button"
          className="orange-btn"
          onClick={(e) => clickHandler(e.target.textContent)}
        >
          -
        </button>

        <button
          type="button"
          className="white-btn"
          onClick={(e) => clickHandler(e.target.textContent)}
        >
          1
        </button>
        <button
          type="button"
          className="white-btn"
          onClick={(e) => clickHandler(e.target.textContent)}
        >
          2
        </button>
        <button
          type="button"
          className="white-btn"
          onClick={(e) => clickHandler(e.target.textContent)}
        >
          3
        </button>
        <button
          type="button"
          className="orange-btn"
          onClick={(e) => clickHandler(e.target.textContent)}
        >
          +
        </button>

        <button
          type="button"
          className="white-btn zero-btn"
          onClick={(e) => clickHandler(e.target.textContent)}
        >
          0
        </button>
        <button
          type="button"
          className="white-btn"
          onClick={(e) => clickHandler(e.target.textContent)}
        >
          .
        </button>
        <button
          type="button"
          className="orange-btn"
          onClick={(e) => clickHandler(e.target.textContent)}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
