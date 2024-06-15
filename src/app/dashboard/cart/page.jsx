"use client";
import { useRouter } from 'next/navigation';

const Cart = () => {
  const router = useRouter();
  const handleOrder = () => {
    console.log('Order placed')
    const id = '1234'
    router.push(`/dashboard/orders/${id}`);
  }
  return ( 
    <div>
      <h1>Shopping Cart</h1>
      <button onClick={handleOrder}>Place Order</button>
    </div>
   );
}
 
export default Cart;