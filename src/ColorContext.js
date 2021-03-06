import React, { useReducer, createContext } from "react";

const ColorContext = createContext();
const initialState = {
  currentColor: "gray"
};

const reducer = (state, action) => {
  switch (action.type) {
    case "RESET":
      return initialState;
    case "SET-COLOR":
      return { ...state, currentColor: action.payload };
    default:
      return initialState;
  }
};

function ColorContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  console.log("con= "+Object.keys(state)+Object.keys(props));

  return (
    <ColorContext.Provider value={value}>{props.children}</ColorContext.Provider>
  );
}

const ColorContextConsumer = ColorContext.Consumer;

export { ColorContext, ColorContextProvider, ColorContextConsumer };