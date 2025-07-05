import React,{useContext} from 'react';
import "../Pages/CSS/ShopCategory.css";
import { ShopContext } from '../Context/ShopContextProvider';
import drop_down from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

export const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='Shop-category'>
      <img className="ShopCategory-banner" src = {props.banner} alt=''/>
      <div className='shopCategory-indexSort'>
        <p>
          <span>showing 1-12</span> out of 36 products
        </p>
         <div className='ShopCategory-sort'>
           sort by <img src = {drop_down} alt=''/>
         </div>
      </div>
      <div className='shopCategory-products'>
          {all_product.map((item,i) => {
              if(props.category === item.category) {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
              }
              else {
                return null;
              }
          })}
      </div>
      <div className="loadmore">
        <hr/>
        <span>Explore more</span>
        <hr/>
      </div>
    </div>
  )
}