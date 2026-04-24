"use client";
import { GetWishlistResponse } from "@/services/types/wishlist_interface";
import { useSession } from "next-auth/react";
import { createContext, useEffect, useState } from "react";

interface WishlistContextType {
  numOfWishlistItems: number;
  setNumOfWishlistItems: (num: number) => void;
  wishlistItems: GetWishlistResponse | null;
  setWishlistItems: React.Dispatch<
    React.SetStateAction<GetWishlistResponse | null>
  >;
}

export const wishlistContext = createContext<WishlistContextType>(
  {} as WishlistContextType,
);

export default function WishlistContextProvider({
  children,
  userWishlist,
}: {
  children: React.ReactNode;
  userWishlist?: GetWishlistResponse | null;
}) {
  const { status } = useSession();

  useEffect(() => {
    if (status === "loading") return;

    if (status === "unauthenticated") {
      setNumOfWishlistItems(0);
      setWishlistItems(null);
      return;
    }

    if (status === "authenticated" && userWishlist) {
      setNumOfWishlistItems(userWishlist.count);
      setWishlistItems(userWishlist);
      return;
    }
  }, [status, userWishlist]);

  const [numOfWishlistItems, setNumOfWishlistItems] = useState<number>(
    userWishlist?.count ?? 0,
  );
  const [wishlistItems, setWishlistItems] =
    useState<GetWishlistResponse | null>(userWishlist ?? null);

  return (
    <wishlistContext.Provider
      value={{
        numOfWishlistItems,
        setNumOfWishlistItems,
        wishlistItems,
        setWishlistItems,
      }}
    >
      {children}
    </wishlistContext.Provider>
  );
}
