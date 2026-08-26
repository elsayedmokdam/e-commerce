"use client";

import { Provider } from "react-redux";
import { AppStore, makeStore, RootState } from "@/redux/store/store";
import { SessionProvider } from "next-auth/react";
import React, { useRef } from "react";
import { setNumOfCartItems } from "@/redux/store/slices/cartSlice/CartSlice";
import { setNumOfWishlistItems } from "@/redux/store/slices/wishlistSlice/WishlistSlice";

interface ProvidersProps {
  children: React.ReactNode;
  preloadedState: RootState;
}

export default function Providers({
  children,
  preloadedState,
}: ProvidersProps) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore(preloadedState);
  }

  React.useEffect(() => {
    storeRef.current?.dispatch(
      setNumOfCartItems(preloadedState.cart.numOfCartItems),
    );

    storeRef.current?.dispatch(
      setNumOfWishlistItems(preloadedState.wishlist.numOfWishlistItems),
    );
  }, [preloadedState]);

  return (
    <SessionProvider>
      <Provider store={storeRef.current}>{children}</Provider>
    </SessionProvider>
  );
}
