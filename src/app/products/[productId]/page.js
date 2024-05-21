export default function ProductDetails({ params }) {
  // show product details
  // query the database for the product details, using params.productId
  return (
    <div>
      <h1>Product Details: {params.productId}</h1>
    </div>
  );
}