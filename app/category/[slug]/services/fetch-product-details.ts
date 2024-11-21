"use server";

export default async function fetchProductDetails(category: string = "cotton") {
  const ENDPOINT = `https://b2b.chums.com/api/products/category/${category}`;
  const response = await fetch(ENDPOINT);
  return response.json();
}
