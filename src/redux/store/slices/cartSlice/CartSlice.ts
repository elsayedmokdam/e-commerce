import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartResponse } from "@/services/types/cart_interface";

interface CartState {
  numOfCartItems: number;
  cartItems: CartResponse | null;
}

const initialState: CartState = {
  numOfCartItems: 0,
  cartItems: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    setCartItems: (state, action: PayloadAction<CartResponse | null>) => {
      state.cartItems = action.payload;
      state.numOfCartItems = action.payload?.numOfCartItems ?? 0;
    },

    setNumOfCartItems: (state, action: PayloadAction<number>) => {
      state.numOfCartItems = action.payload;
    },

    clearCart: (state) => {
      state.cartItems = null;
      state.numOfCartItems = 0;
    },
  },
});

// Export the actions that can be dispatched to update the state
export const { setCartItems, setNumOfCartItems, clearCart } = cartSlice.actions;

export default cartSlice.reducer; // Only the reducer can change the state, so we export the reducer to be used in the store configuration.
