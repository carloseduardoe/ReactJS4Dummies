import React from 'react'

const Hero = ({name, alias, children}) => {
  let containerStyle = {
    padding: 5,
    margin: 0,
    fontFamily: "Sans-Serif",
    border: "5px solid orange",
    fontSize: 15
  };

  let spanStyle = {
    marginLeft: 5,
    color: "gold",
    fontFamily: "Sans-Serif",
    fontSize: 15,
    fontWeight: 400
  };
  
  return (
    <div style={containerStyle}>
      <h6>{name}<span style={spanStyle}>a.k.a {alias}</span></h6>
      {children}
    </div>
  );
}

export default Hero