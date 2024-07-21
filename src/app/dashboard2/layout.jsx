const DashboardLayout = ({children, budget, orderHistory, cart }) => {
  // could have each of these as a <Card> component, on their respective page.jsx
  // which would let me give them the styling (and only have to write the code once)
  // each folder could have a loading page, error page, etc.
  
  return ( 
    <>
      <div>{children}</div>
      <div className="content flex gap-5 m-10">
        <div className="flex flex-col gap-5">
          <div className="border-red-500 border-2 p-4">{budget}</div>
          <div className="border-green-500 border-2 p-4">{orderHistory}</div>
        </div>
        <div className="border-blue-500 border-2 p-4">{cart}</div>
      </div>
    </>
   );
}
 
export default DashboardLayout;