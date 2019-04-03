import React, { createContext, useReducer, useContext } from 'react';

export const StoreContext = createContext();

export const StoreProvider = ({ reducer, initialState, children}) => (
  <StoreContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StoreContext.Provider>
);

export const useStore = () => useContext(StoreContext);
