"use client";
import { CartResponse } from "@/services/types/cart_interface";
import { useSession } from "next-auth/react";
import { createContext, useEffect, useState } from "react";

interface CartContextType {
  numOfCartItems: number;
  setNumOfCartItems: (num: number) => void;
  cartItems: CartResponse | null;
  setCartItems: React.Dispatch<React.SetStateAction<CartResponse | null>>;
}

export const cartContext = createContext<CartContextType>(
  {} as CartContextType,
);

export default function CartContextProvider({
  children,
  userCart,
}: {
  children: React.ReactNode;
  userCart?: CartResponse | null;
}) {
  const { status } = useSession();

  const [numOfCartItems, setNumOfCartItems] = useState(
    userCart?.numOfCartItems || 0,
  );

  const [cartItems, setCartItems] = useState<CartResponse | null>(
    userCart || null,
  );

  useEffect(() => {
    if (status === "authenticated" && userCart) {
      setNumOfCartItems(userCart.numOfCartItems);
      setCartItems(userCart);
    } else {
      setNumOfCartItems(0);
      setCartItems(null);
    }
  }, [status, userCart]);

  return (
    <cartContext.Provider
      value={{
        numOfCartItems,
        setNumOfCartItems,
        cartItems,        
        setCartItems,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
