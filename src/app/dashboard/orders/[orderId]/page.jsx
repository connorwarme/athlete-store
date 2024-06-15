import { capitalizeFirstLetter } from "../../../_lib/utility";

export const generateMetadata = ({ params }) => {
  const orderId = capitalizeFirstLetter(params.orderId);
  return {
    title: 'Order Details',
    description: `${orderId} order details`,
  }
}

const OrderDetails = ({ params }) => {
  // show order details
  // query the database for the order details, using params.orderId
  return ( 
    <div>
      <h1>Order Details: {params.orderId}</h1>
    </div>
   );
}
 
export default OrderDetails;
