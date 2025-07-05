// import React from 'react'
// import { CartItems } from '../components/CartItems/CartItems'

// export const Cart = () => {
//   return (
//     <div>
//       <CartItems/>
//     </div>
//   )
// }
import React from 'react';
import CartItems from '../components/CartItems/CartItems';  // ✅ Remove curly braces

const Cart = () => {
  return (
    <div>
      <CartItems />
    </div>
  );
};

export default Cart;  // ✅ Export as default

