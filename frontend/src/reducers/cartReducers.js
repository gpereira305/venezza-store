import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const hasItem = state.cartItems.find((x) => x.product === item.product);
      if (hasItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((y) =>
            y.product === hasItem.product ? item : y
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    default:
      return state;
  }
};
