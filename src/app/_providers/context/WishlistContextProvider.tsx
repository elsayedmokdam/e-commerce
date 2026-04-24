"use client";
import { useSession } from "next-auth/react";
import { createContext, useEffect, useState } from "react";

interface WishlistContextType {
  numOfWishlistItems: number;
  setNumOfWishlistItems: React.Dispatch<React.SetStateAction<number>>;
}

export const wishlistContext = createContext<WishlistContextType>(
  {} as WishlistContextType,
);

export default function WishlistContextProvider({
  children,
  userWishlistLength,
}: {
  children: React.ReactNode;
  userWishlistLength?: number;
}) {
  const { status } = useSession();

  const [numOfWishlistItems, setNumOfWishlistItems] = useState<number>(
  userWishlistLength ?? 0
);


  useEffect(() => {
    if (status === "loading") return;

    if (status === "unauthenticated") {
      setNumOfWishlistItems(0);
      return;
    }

    if (status === "authenticated" && userWishlistLength) {
      setNumOfWishlistItems(userWishlistLength);
      return;
    }
  }, [status, userWishlistLength]);

  return (
    <wishlistContext.Provider
      value={{
        numOfWishlistItems,
        setNumOfWishlistItems,
      }}
    >
      {children}
    </wishlistContext.Provider>
  );
}
