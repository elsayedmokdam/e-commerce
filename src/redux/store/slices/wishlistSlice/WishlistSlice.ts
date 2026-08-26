import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishlistState {
  numOfWishlistItems: number;
}

const initialState: WishlistState = {
  numOfWishlistItems: 0,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,

  reducers: {
    setNumOfWishlistItems: (state, action: PayloadAction<number>) => {
      state.numOfWishlistItems = action.payload;
    },
    clearWishlist: (state) => {
      state.numOfWishlistItems = 0;
    },
  },
});

export const { clearWishlist, setNumOfWishlistItems } = wishlistSlice.actions;

export default wishlistSlice.reducer;
