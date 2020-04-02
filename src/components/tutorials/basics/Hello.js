import React from 'react'

const Hello = ({name}) => {
  return (
    <div data-testid="hello_container" className="dummyClass">
      <h6 data-testid="hello_message">Hello {name}</h6>
    </div>
  )
}

export default Hello
