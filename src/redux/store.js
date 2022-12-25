import { configureStore } from "@reduxjs/toolkit";
import { productItemsSlice } from "./shoppingCart/productItems";

export const store = configureStore({
  reducer: {
    cartItems: productItemsSlice.reducer,
  },
});
