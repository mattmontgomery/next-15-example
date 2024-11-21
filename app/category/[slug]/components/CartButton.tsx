"use client";

import { useContext } from "react";
import { CartContext } from "../providers/CartProvider";

export default function AddItemToCartButton(props: { item: string }) {
  const cart = useContext(CartContext);
  return (
    <button
      className={
        cart?.cart.includes(props.item)
          ? "bg-green-500 hover:bg-red-400 transition-colors"
          : ""
      }
      onClick={() => {
        cart?.addToCart(props.item);
      }}
    >
      {props.item}
    </button>
  );
}
