import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./ProductSlice";
import cartSlice from "./CartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
  },
});

export default store;
