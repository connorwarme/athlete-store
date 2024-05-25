export default function Categories({ params }) {
  // params.slug is an array of the slug parts
  if (params.slug?.length === 2) {
    // w/ a length of 2, we have a category and a product
    return (
      <div>
        <h3>Category: {params.slug[0]}</h3>
        <h3>Product: {params.slug[1]}</h3>
      </div>
    )
  } else if (params.slug?.length === 1) {
    // w/ a length of 1, we have a category
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
    </div>
  );
}