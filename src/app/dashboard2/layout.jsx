import Card from '../components/card';

const DashboardLayout = ({children, budget, orderHistory, cart }) => {
  // could have each of these as a <Card> component, on their respective page.jsx
  // which would let me give them the styling (and only have to write the code once)
  // each folder could have a loading page, error page, etc.
  
  return ( 
    <>
      <div>{children}</div>
      <div className="content flex gap-5 m-10">
        <div className="flex flex-col gap-5">
          <Card style="border-red-500">{budget}</Card>
          <Card style="border-green-500">{orderHistory}</Card>
        </div>
        <Card style="border-yellow-500">{cart}</Card>
      </div>
    </>
   );
}
 
export default DashboardLayout;