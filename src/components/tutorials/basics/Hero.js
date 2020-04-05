import React from 'react'

const Hero = ({name, alias, children}) => {
  return (
    <div className="hero-component_container" data-testid="hero-component_container">
      <h6 className="hero-component_message" data-testid="hero-component_message">{name}<span>{`a.k.a ${alias}`}</span></h6>
      {children}
    </div>
  );
}

export default Hero