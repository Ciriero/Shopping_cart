import { createContext, useContext, useReducer } from "react";
import reducer from "./reducers";
import items from "../data";

const AppContext = createContext();
const initialState = {
  cart: items,
  amount: 0,
  total: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
