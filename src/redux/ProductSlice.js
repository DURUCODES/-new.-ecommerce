import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  searchTerm: "",
  filteredData: [],
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.product = action.payload;
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
      state.filteredData = state.product.filter((product) =>
        product.name
          .toLowerCase()
          .includes(state.searchTerm.toLocaleLowerCase())
      );
    },
  },
});

export const { setProducts, setSearchTerm } = productSlice.actions;
export default productSlice.reducer;
