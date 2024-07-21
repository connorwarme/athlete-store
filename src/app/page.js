import 'dotenv/config';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col">
      <h1>Home</h1>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/dashboard2">Dashboard2</Link>
      <Link href="/dashboard/orders">Orders</Link>
      <Link href="/products">Products</Link>
      <Link href="/categories">Categories</Link>
    </main>
  );
}
