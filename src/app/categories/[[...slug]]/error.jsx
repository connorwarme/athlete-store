"use client";
// error page must be client component

const CategoryError = ({ error, reset }) => {
  // if we want to try and recover from the error
  // must have page.jsx file as a client component
  // then we can call reset() to re-render the page
  // eg. <button onClick=(reset)>Try Again</button>
  return ( 
    <>
      <h1>Category Error</h1>
      <p>{error.message}</p>
    </>
   );
}
 
export default CategoryError;