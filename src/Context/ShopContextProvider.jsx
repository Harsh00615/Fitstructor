import React, { createContext, useState } from "react";
// import all_product from '../Components/Assets/all_product'
import all_product from '../components/Assets/all_product';

// export const ShopContext = createContext(null);
const ShopContext = createContext(null);
export { ShopContext };
console.log("all_product loaded in context:", all_product);
const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
}

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());


  const AddToCart = (ItemId) => {
    setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] + 1 }))

  }

  // const RemoveFromCart = (ItemId) => {
  //   setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] - 1 }))
  // }
       const RemoveFromCart = (ItemId) => {
       setCartItems((prev) => ({
         ...prev,
         [ItemId]: Math.max(prev[ItemId] - 1, 0),
       }));
     };
     
  const gettotalAmount = () => {
    let TotalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        TotalAmount += itemInfo.new_price * cartItems[item];
      }
      // console.log(TotalAmount);
    }
    return TotalAmount;
  }

  const getTotalItems = () => {
    let TotalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        TotalItems += cartItems[item];
      }

    }
    return TotalItems;
  }

  const contextValue = { all_product, cartItems, AddToCart, RemoveFromCart, gettotalAmount, getTotalItems };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;