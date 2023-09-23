import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>HOME</h1>
      <Link href="/cart" className="text-blue-500 hover:text-blue-600">
        go to cart
      </Link>
    </div>
  );
}
