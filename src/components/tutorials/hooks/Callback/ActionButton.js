import React from 'react';

const ActionButton = ({text, action}) => {
    console.log("button", text);
    return <button onClick={action}>{text}</button>;
}

export default React.memo(ActionButton);
