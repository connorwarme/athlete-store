import Card from '../components/card';

const DashboardLayout = ({ children, budget, orderHistory, cart, login }) => {
  // could have each of these as a <Card> component, on their respective page.jsx
  // which would let me give them the styling (and only have to write the code once)
  // each folder could have a loading page, error page, etc.

  const isLoggedIn = true;
  // normally this would be a getUser function that checks if the user is logged in
  // and returns the user object if they are, or false if they are not
  // or a useAuth fn.. 
  
  // the isLoggedIn check keeps the user from seeing the dashboard if they are not logged in
  return isLoggedIn ? ( 
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
   ) : (
    <>
      <Card style="border-purple-500">{login}</Card>
    </>
   );
}
 
export default DashboardLayout;