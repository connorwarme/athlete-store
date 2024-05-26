export default function ProductLayout({ children }) {
  // opportunity to add to the product page
  // perhaps a section of related products?
  return (
    <div>
      {children}
      <h3>Related Products</h3>
    </div>
  );
}