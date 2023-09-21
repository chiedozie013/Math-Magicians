import React from 'react';
import PropTypes from 'prop-types';

function CalculatorDisplay({ result }) {
  return <div>{result}</div>;
}

CalculatorDisplay.defaultProps = {
  result: 0,
};

CalculatorDisplay.propTypes = {
  result: PropTypes.number,
};

export default CalculatorDisplay;
