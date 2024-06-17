const DashboardLayout = ({children, budget, orderHistory, cart }) => {
  // could have each of these as a <Card> component, on their respective page.jsx
  // which would let me give them the styling (and only have to write the code once)
  // each folder could have a loading page, error page, etc.
  
  return ( 
    <>
      <div>{children}</div>
      <div className="content flex">
        <div className="flex flex-col">
          <div>{budget}</div>
          <div>{orderHistory}</div>
        </div>
        <div>{cart}</div>
      </div>
    </>
   );
}
 
export default DashboardLayout;