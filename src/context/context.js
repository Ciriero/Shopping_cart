import { createContext, useContext, useReducer } from "react";
import reducer from "./reducers";
import books from "../data";
import { DELETE_ALL, DELETE_ONE } from "./actions";

const AppContext = createContext();
const initialState = {
  cart: books,
  amount: 0,
  total: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const deleleteAllBooks = () => {
    dispatch({
      type: DELETE_ALL,
    });
  };

  const deleteOne = (id) => {
    dispatch({
      type: DELETE_ONE,
      payload: id,
    });
  };

  return (
    <AppContext.Provider value={{ ...state, deleleteAllBooks, deleteOne }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
