import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      console.log(state)
      state.push(action.payload);
    },
    removeItem(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    increaseQty(state, action) {
      state = state.map(item => {
        if (item.id === action.payload) {
          item.qty++;
        }
        return item;
      });
    },
    decreaseQty(state, action) {
      state = state.map(item => {
        if (item.id === action.payload) {
          item.qty--;
        }
        return item;
      });
    },
    setQty(state, action) {
      state = state.map(item => {
        if (item.id === action.payload.id) {
          item.qty = action.payload.qty;
        }
        return item;
      });
    },
    setDetails(state, action) {
      state = state.map(item => {
        if (item.id === action.payload.id) {
          item.details = action.payload.details;
        }
        return item;
      });
    },

  },
});

export const { addItem, removeItem, increaseQty, decreaseQty, setQty, setDetails } = cartSlice.actions;
export default cartSlice.reducer;