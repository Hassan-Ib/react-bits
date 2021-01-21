const reducer = (state, action) => {
  if (action.type === "CLEAR-CART") {
    const newState = { ...state, total: 0, amount: 0, cart: [] };
    return newState;
  }
  if (action.type === "REMOVE") {
    const filteredCart = state.cart.filter(
      (cartItem) => cartItem.id !== action.payload
    );
    return { ...state, cart: filteredCart };
  }
  if (action.type === "ITEM_AMOUNT") {
    let tempCart = state.cart
      .map((cartItem) => {
        const { id, type } = action.payload;
        if (cartItem.id === id) {
          if (type === "decrease") {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
          return { ...cartItem, amount: cartItem.amount + 1 };
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  }
  //   if (action.type === "INCREASE") {
  //     let tempCart = state.cart.map((cartItem) => {
  //       if (cartItem.id === action.payload) {
  //         return { ...cartItem, amount: cartItem.amount + 1 };
  //       }
  //       return cartItem;
  //     });
  //     return { ...state, cart: tempCart };
  //   }
  //   if (action.type === "DECREASE") {
  //     let tempCart = state.cart
  //       .map((cartItem) => {
  //         if (cartItem.id === action.payload) {
  //           return { ...cartItem, amount: cartItem.amount - 1 };
  //         }
  //         return cartItem;
  //       })
  //       .filter((cartItem) => cartItem.amount !== 0);
  //     return { ...state, cart: tempCart };
  //   }
  if (action.type === "GET_TOTALS") {
    let { amount, total } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { amount, price } = cartItem;
        cartTotal.amount += amount;
        cartTotal.total += price * amount;
        return cartTotal;
      },
      { amount: 0, total: 0 }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, amount, total };
  }
  if (action.type === "LOADING") {
    return { ...state, isLoading: true };
  }
  if (action.type === "DISPLAY_ITEMS") {
    return { ...state, cart: action.payload, isLoading: false };
  }

  //   return state;
  throw new Error("no matching action type");
};
export default reducer;
