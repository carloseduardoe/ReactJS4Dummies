import React from 'react'

const Hello = ({name}) => {
  return (
    <div data-testid="hello-component_container" className="hello-component_container">
      <h6 data-testid="hello-component_message">Hi {name}!</h6>
    </div>
  )
}

export default Hello
