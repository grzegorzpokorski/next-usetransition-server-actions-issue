"use server";

import { revalidatePath } from "next/cache";

export const exampleServerAction = async () => {
  const product = await fetch("https://dummyjson.com/products/1", {
    cache: "no-store",
  });

  revalidatePath("/cart");

  return product.headers;
};
