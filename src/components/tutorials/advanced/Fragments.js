import React from 'react';

/*
* Fragments are used to provide a ghost wrapper to a component group, the wrapper will not be rendered in the DOM
* Empty opening/closing tags may be used instead of "React.Fragment" ( <> </> )
*/

function Fragments() {
	return (
		<React.Fragment>
			<h3>Fragment</h3>
			<p>Fragment Child 1</p>
			<p>Fragment Child 2</p>
			<p>Fragment Child 3</p>
			<p>Fragment Child ...</p>
		</React.Fragment>
	);
}

export default Fragments;
