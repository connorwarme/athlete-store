import Link from "next/link";

const OrderHistory = () => {
  const orderArrayExample = [
    {
      orderNumber: 123456,
      date: '2021-08-01',
      status: 'Delivered',
      total: 100
    },
    {
      orderNumber: 123457,
      date: '2021-08-02',
      status: 'In Transit',
      total: 200
    },
    {
      orderNumber: 123458,
      date: '2021-08-03',
      status: 'Delivered',
      total: 300
    },
  ]
  return ( 
    <>
      <h1>Order History</h1>
      <p>View order history, track packages...</p>
      <ul>
        {orderArrayExample.map(order => (
          <li key={order.orderNumber}>
          <Link href={`/dashboard2/${order.orderNumber}`}>
            <p>Order Number: {order.orderNumber}</p>
            <p>Date: {order.date}</p>
            <p>Status: {order.status}</p>
            <p>Total: {order.total}</p>
          </Link>
          </li>
        ))}
      </ul>
    </>
   );
}
 
export default OrderHistory;