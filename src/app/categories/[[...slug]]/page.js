import Link from "next/link";
import { capitalizeFirstLetter } from "../../_lib/utility";

export const generateMetadata = ({ params }) => {
  if (params.slug?.length === 2) {
    const title = capitalizeFirstLetter(params.slug[1]);
    return {
      title: `${title}`,
      description: `${title} product details`,
    };
  } else if (params.slug?.length === 1) {
    const title = capitalizeFirstLetter(params.slug[0]);
    return {
      title: `${title}`,
      description: `${title} category: list of all products`,
    };
  }
  return {
    title: "Categories",
    description: "List of all categories",
  };
}
const randomNumber = Math.floor(Math.random() * 10);

export default function Categories({ params }) {
  const random = randomNumber;
  if (random < 2) {
    throw new Error("Random error in category");
  }
  // params.slug is an array of the slug parts
  if (params.slug?.length === 2) {
    // w/ a length of 2, we have a category and a product
    // e.g. /categories/shirts/sunhoody
    // would need to query for product (details) and category (name only? url?)
    return (
      <div>
        <h3>Category: {params.slug[0]}</h3>
        <h3>Product: {params.slug[1]}</h3>
      </div>
    )
  } else if (params.slug?.length === 1) {
    // w/ a length of 1, we have a category
    // need to query for items in that category
    return (
      <div>
        <h3>Category: {params.slug[0]}</h3>
      </div>
    )
  }
  // default: show all categories
  return (
    <div>
      <h1>Categories</h1>
      <Link href="/categories/shirts">Shirts</Link>
      <Link href="/categories/pants">Pants</Link>
      <Link href="/categories/shoes">Shoes</Link>
    </div>
  );
}