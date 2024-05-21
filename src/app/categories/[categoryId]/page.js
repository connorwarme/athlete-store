export default function CategorySpecific({ params }) {
  return (
    <div>
      <h1>Category: {params.categoryId}</h1>
    </div>
  );
}