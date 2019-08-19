import React from 'react';

/*
 * Default values are passed when the context is created;
*/


const Context = React.createContext();

const Provider = Context.Provider;

const Consumer = Context.Consumer;

export { Provider, Consumer };
export default Context;