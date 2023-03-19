import { DELETE_ALL, DELETE_ONE, GET_TOTAL, SELECT_AMOUNT } from "./actions";

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
    case SELECT_AMOUNT:
      let tempCart = state.cart
        .map((item) => {
          if (item.id === action.payload.id) {
            if (action.payload.type === "mas") {
              return { ...item, amount: item.amount + 1 };
            }
            if (action.payload.type === "menos") {
              return { ...item, amount: item.amount - 1 };
            }
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
      return { ...state, cart: tempCart };
    case GET_TOTAL:
      let tempTotal = 0;
      let tempAmount = 0;
      state.cart.map((item) => {
        const { price, amount } = item;
        tempTotal += price * amount;
        tempAmount += amount;
      });
      return {
        ...state,
        total: parseFloat(tempTotal.toFixed(2)),
        amount: tempAmount,
      };

    default:
      return state;
  }
};

export default reducer;
