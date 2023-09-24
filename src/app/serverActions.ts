"use server";

import { revalidatePath } from "next/cache";

export const exampleServerAction = async () => {
  const number = Math.floor(Math.random() * 50);
  const product = await fetch(`https://dummyjson.com/products/${number}`, {
    cache: "no-store",
  });

  revalidatePath("/cart");

  return await product.json();
};
