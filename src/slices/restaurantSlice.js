import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  restaurant: null,
  selectedCategory: '',
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const {setRestaurant, setSelectedCategory} = restaurantSlice.actions;

export const selectRestaurant = state => state.restaurant;

export const selectSelectedCategory = state => state.restaurant.selectedCategory;

export default restaurantSlice.reducer;
