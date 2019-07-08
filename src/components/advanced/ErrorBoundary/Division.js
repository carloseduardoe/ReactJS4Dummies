import React from 'react'

const Division = ({dividend, divisor}) => {
  if (typeof dividend !== "number" || typeof divisor !== "number" || divisor === 0) {
    throw new Error('Incorrect arguments!');
  }

  return <div>{(dividend / divisor)}</div>;
}

export default Division