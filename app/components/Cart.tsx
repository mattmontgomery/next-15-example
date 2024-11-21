"use client";

import { useContext } from "react";
import { CartContext } from "../category/[slug]/providers/CartProvider";

export default function Cart() {
  const cart = useContext(CartContext);
  return <div>Cart: {cart?.cart.join(", ")}</div>;
}
