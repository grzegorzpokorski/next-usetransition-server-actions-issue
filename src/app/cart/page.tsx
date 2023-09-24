import Link from "next/link";
import { FetchButton } from "../../components/fetch-button";

export default async function Page() {
  const product = await fetch(
    `http://worldtimeapi.org/api/timezone/Europe/London`,
    {
      cache: "no-store",
    },
  );

  if (product.ok) {
    const data = await product.json();
    return (
      <div>
        <h1>CART</h1>
        <Link href="/" className="text-blue-500 hover:text-blue-600">
          go Home
        </Link>
        <FetchButton />
        <div className="flex flex-col">
          <h2 className="font-bold">
            Data from another request to check if page is revalidated:
          </h2>
          <p>{data.datetime}</p>
        </div>
      </div>
    );
  }

  return null;
}
