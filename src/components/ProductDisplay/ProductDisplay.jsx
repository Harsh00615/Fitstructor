import React, { useContext } from 'react';
import "../ProductDisplay/ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import  {ShopContext}  from '../../context/ShopContextProvider';

const ProductDisplay = (props) => {
  const { product } = props;
  const { AddToCart } = useContext(ShopContext);

  return (
    <div className='productDisplay'>
      <div className="productDisplay-left">
        <div className="productDisplay-imgList">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productDisplay-img">
          <img className="productDisplay-mainImg" src={product.image} alt="" />
        </div>
      </div>

      <div className="productDisplay-right">
        <h1>{product.name}</h1>

        <div className="productDisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>

        <div className="productDisplay-right-prices">
          <div className="productDisplay-right-prices-old">${product.old_price}</div>
          <div className="productDisplay-right-prices-new">${product.new_price}</div>
        </div>

        <div className="productDisplay-right-discription">
          Step into comfort with our versatile casual T-shirt, crafted from ultra-soft cotton for a relaxed fit that feels like a second skin.
          Whether you're running errands or lounging at home, this tee effortlessly blends style and ease.
          Available in a range of classic and trendy colors, it's the perfect addition to your everyday wardrobe.
        </div>

        <div className="productDisplay-right-size">
          <h1>Select Size</h1>
          <div className="productDisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>

        <button onClick={() => AddToCart(product.id)}>ADD TO CART</button>

        <p className='productDisplay-right-category'>
          <span>Category: </span>{product.category}
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
