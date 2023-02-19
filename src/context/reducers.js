import { DELETE_ALL } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case DELETE_ALL:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

export default reducer;
