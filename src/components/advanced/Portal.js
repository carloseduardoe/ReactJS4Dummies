import React from 'react';
import ReactDOM from 'react-dom';

const Portals = ({}) => {
	return ReactDOM.createPortal(
    <div>
      <h3>Hello from the portal!</h3>
      <img style={{width: "100%"}} src="https://source.unsplash.com/random/?open%20door" alt="Portal Image Here"/>
    </div>,
		document.getElementById('portal-example')
	);
}


export default Portals

