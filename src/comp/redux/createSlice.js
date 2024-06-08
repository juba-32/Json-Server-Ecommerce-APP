import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalAmount: 0,
  totalPrice: 0,
  selectedCategory: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    setSelectedCategory: (state, action) =>{
      state.selectedCategory = action.payload
    },
    addToCart: (state, action) => {
      const newItem = action.payload;
      const productInCart = state.cart.find((pro) => pro.id === newItem.id);
      if (productInCart) {
        productInCart.quantity += 1;
        productInCart.totalPrice += newItem.price;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
          totalPrice: newItem.price,
        });
        state.totalAmount++;
      }
    },

    removeFromCart: (state, action) => {
      const deleteProduct = state.cart.filter(
        (pro) => pro.id !== action.payload
      );
      state.cart = deleteProduct;
      state.totalAmount--;
    },

    increment: (state, action) => {
      const item = state.cart.find((pro) => pro.id === action.payload);
      item.quantity++;
      item.totalPrice += item.price;
    },

    decrement: (state, action) => {
      const item = state.cart.find((pro) => pro.id === action.payload); 
        item.quantity--;
        item.totalPrice -= item.price;
    },
  },
});

export const { addToCart, removeFromCart, increment, decrement,setSelectedCategory } =
  cartSlice.actions;

export default cartSlice.reducer;
