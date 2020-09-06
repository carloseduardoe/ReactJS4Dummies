import { createContext, useContext } from 'react';

const context = createContext();

export const Provider = context.Provider;

export const Consumer = context.Consumer;

export const useGlobalContext = () => {
    return useContext(context);
}