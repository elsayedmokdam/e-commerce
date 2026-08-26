import { configureStore, combineReducers } from "@reduxjs/toolkit";

import cartReducer from "./slices/cartSlice/CartSlice";
import wishlistReducer from "./slices/wishlistSlice/WishlistSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = (preloadedState?: RootState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState, // initial state
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
