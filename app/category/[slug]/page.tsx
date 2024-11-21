import CategorySelector from "./components/CategorySelector";
import Orders from "./components/Orders";
import fetchProductDetails from "./services/fetch-product-details";

export default async function CategoryPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const products = await fetchProductDetails((await props.params).slug);
  return (
    <>
      <Orders />
      <hr />
      <CategorySelector value={products} />
    </>
  );
}
