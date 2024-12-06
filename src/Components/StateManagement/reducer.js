// here we create a reducer function
export const initialState = {
  basket: [],
  user: null,
};
// Selector
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const filtedData = state.basket.filter((item) => item.id !== action.id);
      return {
        ...state,
        basket: filtedData,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
