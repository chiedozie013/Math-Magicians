import React from 'react';

function CalculatorDisplay() {
  return (
    <div>
      <div className="container">
        <div className="sum-display sum">
          <span>0</span>
        </div>

        <button type="button" className="btn-white">
          AC
        </button>
        <button type="button" className="btn-white">
          +/-
        </button>
        <button type="button" className="btn-white">
          %
        </button>
        <button type="button" className="btn-orange">
          &#xf7;
        </button>

        <button type="button" className="btn-white">
          7
        </button>
        <button type="button" className="btn-white">
          8
        </button>
        <button type="button" className="btn-white">
          9
        </button>
        <button type="button" className="btn-orange">
          x
        </button>

        <button type="button" className="btn-white">
          4
        </button>
        <button type="button" className="btn-white">
          5
        </button>
        <button type="button" className="btn-white">
          6
        </button>
        <button type="button" className="btn-orange">
          -
        </button>

        <button type="button" className="btn-white">
          1
        </button>
        <button type="button" className="btn-white">
          2
        </button>
        <button type="button" className="btn-white">
          3
        </button>
        <button type="button" className="btn-orange">
          +
        </button>

        <button type="button" className="btn-white btn-zero">
          0
        </button>
        <button type="button" className="btn-white">
          .
        </button>
        <button type="button" className="btn-orange">
          =
        </button>
      </div>
    </div>
  );
}
export default CalculatorDisplay;
