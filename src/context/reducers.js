import { DELETE_ALL, DELETE_ONE } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case DELETE_ALL:
      return {
        ...state,
        cart: [],
      };
    case DELETE_ONE:
      const deleteBook = state.cart.filter(
        (item) => item.id !== action.payload
      );
      console.log(`borrado id: ${action.payload}`);
      return {
        ...state,
        cart: deleteBook,
      };

    default:
      return state;
  }
};

export default reducer;
