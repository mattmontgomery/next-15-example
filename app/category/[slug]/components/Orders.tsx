"use server";

import AddItemToCartButton from "./CartButton";

async function fetchOrders() {
  const ENDPOINT = `https://api.sampleapis.com/recipes/recipes`;
  const response = await fetch(ENDPOINT);
  return response.json();
}

export default async function Orders() {
  const orders = await fetchOrders();
  return (
    <div>
      <h1>Orders</h1>
      <div className="grid grid-flow-row gap-y-2">
        {orders.map((item: { id: number; title: string }) => (
          <AddItemToCartButton key={item.title} item={item.title} />
        ))}
      </div>
    </div>
  );
}
