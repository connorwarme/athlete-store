"use client";
// error page must be client component

const CategoryError = ({ error }) => {
  return ( 
    <>
      <h1>Category Error</h1>
      <p>{error.message}</p>
    </>
   );
}
 
export default CategoryError;