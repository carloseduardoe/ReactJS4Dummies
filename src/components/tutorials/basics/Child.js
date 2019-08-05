import React from 'react'

const Child = ({name, sayHi}) => {
  let style = {
    backgroundColor: "gold",
    padding: 5
  };

  return (
    <div style={style}>
      {name}
      <button onClick={() => sayHi(name)}>sayHi</button>
    </div>
  );
}

export default Child