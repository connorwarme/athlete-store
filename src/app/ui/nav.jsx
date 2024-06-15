"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const navLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/dashboard/cart", label: "Shopping Cart" },
    { href: "/dashboard/order-history", label: "Order History" },
    { href: "/products", label: "Products" },
    { href: "/categories", label: "Categories" },
  ]
  const pathname = usePathname();
  
  const linkStyle = "text-blue-500 hover:text-blue-700 p-2";
  const linkStyleActive = "text-blue-700 bg-white border border-blue-700 p-2";
  return (
    <nav>
      <ul>
        { navLinks.map(({ href, label }) => (
          <li key={href} className="m-2">
            <Link href={href} className={pathname.endsWith(href) ? linkStyleActive : linkStyle}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}