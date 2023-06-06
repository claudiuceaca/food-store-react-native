import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  favorites: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const {id} = action.payload;
      const existingItemIndex = state.cart.findIndex(item => item.id === id);

      if (existingItemIndex !== -1) {
        state.cart[existingItemIndex].quantity += 1;
      } else {
        state.cart.push({...action.payload, quantity: 1});
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.cart.find(i => i.id === itemId);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.cart = state.cart.filter(i => i.id !== itemId);
        }
      }
    },
    emptyCart: state => {
      state.cart = [];
    },
    addToFavorites: (state, action) => {
      const newItem = action.payload;
      const itemInFavorites = state.favorites.find(item => item.id === newItem.id);
    
      if (!itemInFavorites) {
        state.favorites.push(newItem);
      }
    },
    removeFromFavorites: (state, action) => {
      const itemId = action.payload;
      state.favorites = state.favorites.filter(item => item.id !== itemId);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  emptyCart,
  addToFavorites,
  removeFromFavorites,
} = cartSlice.actions;

export const selectCartItems = state => state.cart.cart;

export const selectCartItemsById = (state, id) =>
  state.cart.cart.filter(item => item.id === id);

export const selectCartTotalPrice = state =>
  state.cart.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

export const selectFavoriteItems = state => state.cart.favorites;

export const selectIsItemFavorite = (state, id) =>
  state.cart.favorites.some(item => item.id === id);

export default cartSlice.reducer;
