"use client";

import { useRouter } from "next/navigation";
import Orders from "./Orders";

export default function CategorySelector(props: { value: unknown }) {
  const router = useRouter();
  return (
    <div>
      <h1>CategorySelector</h1>
      <select
        onChange={async (ev) => {
          router.push(`/category/${ev.target.value}`);
        }}
      >
        <option>cotton</option>
        <option>rope</option>
      </select>
      <pre>{JSON.stringify(props.value, null, 2)}</pre>
    </div>
  );
}
