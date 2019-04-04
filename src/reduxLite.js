import React, { createContext, useReducer, useContext } from 'react';

export const StoreContext = createContext();

export const StoreProvider = ({ reducer, children }) => (
  <StoreContext.Provider value={useReducer(reducer, reducer(undefined, { type: '_INIT_' }))}>
    {children}
  </StoreContext.Provider>
);

export const useStore = () => useContext(StoreContext);