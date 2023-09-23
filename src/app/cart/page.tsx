import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Cart</h1>
      <Link href="/" className="text-blue-500 hover:text-blue-600">
        go Home
      </Link>
    </div>
  );
}
