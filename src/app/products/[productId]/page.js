import { capitalizeFirstLetter } from "@/app/_lib/utility";

export const generateMetadata = ({ params }) => {
  const productId = capitalizeFirstLetter(params.productId);
  return {
    title: `${productId}`,
    description: `${productId} product details`,
  }
}

export default function ProductDetails({ params }) {
  // show product details
  // query the database for the product details, using params.productId
  return (
    <div>
      <h1>Product Details: {params.productId}</h1>
    </div>
  );
}