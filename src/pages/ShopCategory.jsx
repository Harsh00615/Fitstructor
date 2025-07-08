import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import "../pages/CSS/ShopCategory.css";
import all_product from '../components/Assets/all_product';
import {ShopContext} from '../Context/ShopContextProvider';
import drop_down from '../components/Assets/dropdown_icon.png';
import Item from '../components/Item/Item';
import banner_men from "../components/Assets/banner_mens.png";
import banner_women from "../components/Assets/banner_women.png";
import banner_kids from "../components/Assets/banner_kids.png";

const ShopCategory = () => {
  const { categoryName } = useParams();
  const { all_product = [] } = useContext(ShopContext) || {};

  const bannerMap = {
    men: banner_men,
    women: banner_women,
    kid: banner_kids
  };

  const banner = bannerMap[categoryName] || "";

  const filteredProducts = all_product.filter(
  (item) => item.category.toLowerCase() === categoryName.toLowerCase()
);

  return (
    <div className='Shop-category'>
      <img className="ShopCategory-banner" src={banner} alt='Category Banner' />

      <div className='shopCategory-indexSort'>
        <p>
          <span>Showing {filteredProducts.length}</span> out of {all_product.length} products
        </p>
        <div className='ShopCategory-sort'>
          Sort by <img src={drop_down} alt='Sort Icon' />
        </div>
      </div>

      <div className='shopCategory-products'>
        {filteredProducts.length === 0 ? (
          <p>No products found in this category.</p>
        ) : (
          filteredProducts.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        )}
      </div>

      <div className="loadmore">
        <hr />
        <span>Explore more</span>
        <hr />
      </div>
    </div>
  );
};  
 export default ShopCategory;    
