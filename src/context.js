import React, { useState, useContext, useReducer } from "react";

import { OPEN_OVERLAY, CLOSE_OVERLAY } from "./actions";

import reducer from "./reducer";

const initialState = {
  is_overlay_open: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openOverlay = () => {
    dispatch({ type: OPEN_OVERLAY });
  };
  const closeOverlay = () => {
    dispatch({ type: CLOSE_OVERLAY });
  };

  return (
    <AppContext.Provider value={{ ...state, openOverlay, closeOverlay }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGLobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
