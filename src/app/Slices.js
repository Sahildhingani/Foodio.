import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Start with an empty array to store cart items
};

export const slices = createSlice({
  name: "dataofcart",
  initialState, // Fixed casing from `initialstate` to `initialState`
  reducers: {
    add: (state, action) => {
      // Create a new cart item with a unique ID
      const dataofcart = {
        id: nanoid(), // Generate a unique ID
        dishname: action.payload.dishname,
        Price: action.payload.Price,
        cnt: action.payload.cnt,
        Detail: action.payload.Detail,
        imageid: action.payload.imageid,
        Rating: action.payload.Rating,
      };
      state.items.push(dataofcart); // Add the new item to the cart
    },
    remove: (state, action) => {
      // Filter items by ID to remove the correct one
      state.items = state.items.filter((e) => e.dishname !== action.payload.dishname);
    },
    increase: (state, action) => {
      // Find the item by dish name and increase its count
      const item = state.items.find((e) => e.dishname === action.payload.dishname);
      if (item) {
        item.cnt += 1; // Increment the existing count
      }
    },
    
    decrease: (state, action) => {
      // Find the item by ID and decrease its count, ensuring it doesn’t go below 1
      const item = state.items.find((e) => e.dishname === action.payload.dishname);
      if (item && item.cnt > 1) {
        item.cnt -= 1;
      }
    },
  },
});

// Export actions for use in components
export const { add, remove, increase, decrease } = slices.actions;

// Export reducer for store configuration
export default slices.reducer;

