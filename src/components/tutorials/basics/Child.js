import React from 'react'

const Child = ({name, callback}) => {
  return (
    <div className="component_layer">
      <div>{name}</div>
      <br/>
      <button onClick={() => callback(name)}>Trigger callback</button>
    </div>
  );
}

export default Child