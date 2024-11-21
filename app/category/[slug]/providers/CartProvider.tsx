"use client";

import { createContext, PropsWithChildren, useEffect, useState } from "react";

export type CartContextType = {
  cart: string[];
  addToCart: (item: string) => void;
  removeFromCart: (item: string) => void;
  onCartChange: (cart: string[]) => void;
};
export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

export default function CartContextProvider(
  props: PropsWithChildren<{
    onCartChange: CartContextType["onCartChange"];
  }>,
) {
  const [cart, setCart] = useState<string[]>([]);
  const addToCart = (item: string) => {
    setCart((cart) =>
      cart.includes(item) ? cart.filter((i) => i !== item) : [...cart, item],
    );
  };
  const removeFromCart = (item: string) => {
    setCart((cart) => cart.filter((i) => i !== item));
  };
  useEffect(() => {
    props.onCartChange(cart);
  }, [cart, props]);
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        onCartChange: props.onCartChange,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
