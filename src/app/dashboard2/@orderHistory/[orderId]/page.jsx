import Link from "next/link";

const OrderDetails = ({ params }) => {
  // query the database for the order details, using params.orderId

  return ( 
    <>
      <h1>Order Details</h1>
      <p>{params.orderId}</p>
      <Link href="/dashboard2">Back</Link>
    </>
   );
}
 
export default OrderDetails;