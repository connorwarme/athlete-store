const DashboardLayout = ({children, budget, orderHistory, cart }) => {
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