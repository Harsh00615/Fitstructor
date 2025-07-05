import React, { useContext } from 'react';
import "../CartItems/CartItems.css";
import { ShopContext } from '../../Context/ShopContextProvider';
import cart_cross_icon from "../Assets/cart_cross_icon.png";
import RelatedProduct from '../RelatedProducts/RelatedProduct';  // ✅ Fixed import (no { })

const CartItems = () => {
  const { all_product, cartItems, RemoveFromCart, AddToCart, gettotalAmount } = useContext(ShopContext);

  return (
    <>
      <div className="cartItems">
        <div className="cartItems-main-Format">
          <p>Product</p>
          <p>Title</p>
          <p>Price</p>        {/* ✅ Fixed typo: Prize → Price */}
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />

        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={e.id}>  {/* ✅ Added key to parent div */}
                <div className="cartItems-format cartItems-main-Format">
                  <img src={e.image} alt="" className='cartIcon-product-icon' />
                  <p>{e.name}</p>
                  <p>${e.new_price}</p>
                  <button className='cartItems-Quantity' onClick={() => AddToCart(e.id)}>
                    {cartItems[e.id]}
                  </button>
                  <p>${e.new_price * cartItems[e.id]}</p>
                  <img
                    src={cart_cross_icon}
                    alt="Remove"
                    onClick={() => RemoveFromCart(e.id)}
                    className='delete_icon'
                  />
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}

        <div className="CartItems-down">
          <div className="cartItems-total">
            <h1>Cart Total</h1>
            <div>
              <div className="cartItems-subtotal">
                <p>Subtotal</p>
                <p>${gettotalAmount()}</p>
              </div>
              <hr />
              <div className="cartItems-subtotal">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartItems-subtotal">
                <h3>Total</h3>
                <h3>${gettotalAmount()}</h3>
              </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>

          <div className="CartItems-promoCode">
            <p>If you have any promo code, enter it here</p>
            <div className="CartItem-promoBox">
              <input type="text" placeholder='Promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>

      <RelatedProduct />
    </>
  );
};

export default CartItems;
