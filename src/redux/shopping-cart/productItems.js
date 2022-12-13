// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   value: items,
// };

// const items =
//   localStorage.getItem("productItems") !== null
//     ? JSON.parse(localStorage.getItem("productItems"))
//     : [];

// export const productItemsSlice = createSlice({
//   name: "productItems",
//   initialState,
//   reducers: {
//     addItem: (state, action) => {
//       localStorage.setItem(
//         "cartItems",
//         JSON.stringify(
//           state.value.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
//         )
//       );
//     },
//     updateItem: (state, action) => {
//       localStorage.setItem(
//         "cartItems",
//         JSON.stringify(
//           state.value.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
//         )
//       );
//     },
//     removeItem: (state, action) => {
//       localStorage.setItem(
//         "cartItems",
//         JSON.stringify(
//           state.value.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
//         )
//       );
//     },
//   },
// });

// export const { addItem, updateItem, removeItem } = productItemsSlice.actions;

// export default productItemsSlice.reducer;
