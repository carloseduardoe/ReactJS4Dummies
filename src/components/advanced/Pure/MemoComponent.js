import React from 'react'

/*
 * React.memo converts a Functional component into a Pure component.
 * 
 * React version must be >= 16.6
*/

function MemoComp({ name }) {
  console.log('Memo render')
  return <div>{name}</div>;
}

export default React.memo(MemoComp)
