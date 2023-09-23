import Link from "next/link";
import { FetchButton } from "../../components/fetch-button";

export default async function Page() {
  return (
    <div>
      <h1>CART</h1>
      <Link href="/" className="text-blue-500 hover:text-blue-600">
        go Home
      </Link>
      <FetchButton />
    </div>
  );
}
