import { createSlice } from "@reduxjs/toolkit";

export const productItemsSlice = createSlice({
  name: "productItems",
  initialState: {
    products: [],
    totalPrice: 0,
    amount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      let products = state.products;
      let amountProductInCart = products.length ?? 0;
      let totalPrice = state.totalPrice;
      let newProductAddToCart = null;
      let otherProductsExistedInCart = [];

      // check item existed in cart
      if (products.length > 0) {
        products.forEach((p) => {
          if (
            p.id === newItem.id &&
            p.quantity === newItem.quantity &&
            p.color === newItem.color
          ) {
            console.log("case san pham da ton tai", p);
            newProductAddToCart = Object.assign({}, p);
          } else {
            otherProductsExistedInCart.push(p);
          }
        });

        if (newProductAddToCart) {
          console.log("case trung san pham de update so luong va tien");
          // case trung san pham thay do so luong va tien
          let product = Object.assign({}, newProductAddToCart);
          product.quantity += newItem.quantity;
          amountProductInCart = newItem.quantity;
          totalPrice = Math.abs(
            parseInt(newItem.quantity) * parseInt(newItem.price)
          );
          otherProductsExistedInCart.unshift(product);
          products = Object.assign([], otherProductsExistedInCart);
        } else {
          console.log("case san pham moi de update so luong va tien");
          // case san pham moi
          products.unshift({
            id: newItem.id,
            name: newItem.name,
            imageAvt: newItem.imageAvt,
            brandName: newItem.brandName,
            price: newItem.price,
            color: newItem.color,
            capacity: newItem.capacity,
            quantity: newItem.quantity,
          });
          amountProductInCart = newItem.quantity;
          totalPrice = Math.abs(
            parseInt(newItem.quantity) * parseInt(newItem.price)
          );
        }
      } else {
        // case add new cart
        products.push({
          id: newItem.id,
          name: newItem.name,
          imageAvt: newItem.imageAvt,
          brandName: newItem.brandName,
          price: newItem.price,
          color: newItem.color,
          capacity: newItem.capacity,
          quantity: newItem.quantity,
        });
        amountProductInCart = newItem.quantity;
        totalPrice = Math.abs(
          parseInt(newItem.quantity) * parseInt(newItem.price)
        );
      }

      state.products = Object.assign([], products);
      state.amount += parseInt(amountProductInCart);
      state.totalPrice += parseInt(totalPrice);

      localStorage.setItem("cartItems", JSON.stringify(state));
      console.log(state);
    },
    removeItem: (state, action) => {
      const removeProduct = action.payload;
      state = state.filter((product) => product.id !== removeProduct);
    },
  },
});

export const { addItem, removeItem } = productItemsSlice.actions;

export default productItemsSlice.reducer;
