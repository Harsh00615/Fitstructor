// import React,{useContext} from 'react';
// import "../pages/CSS/ShopCategory.css";
// import { ShopContext } from '../Context/ShopContextProvider';
// import drop_down from '../components/Assets/dropdown_icon.png';
// import Item from '../components/Item/Item';

// export const ShopCategory = (props) => {
//   const {all_product} = useContext(ShopContext);
//   return (
//     <div className='Shop-category'>
//       <img className="ShopCategory-banner" src = {props.banner} alt=''/>
//       <div className='shopCategory-indexSort'>
//         <p>
//           <span>showing 1-12</span> out of 36 products
//         </p>
//          <div className='ShopCategory-sort'>
//            sort by <img src = {drop_down} alt=''/>
//          </div>
//       </div>
//       <div className='shopCategory-products'>
//           {all_product.map((item,i) => {
//               if(props.category === item.category) {
//                 return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
//               }
//               else {
//                 return null;
//               }
//           })}
//       </div>
//       <div className="loadmore">
//         <hr/>
//         <span>Explore more</span>
//         <hr/>
//       </div>
//     </div>
//   )
// }
import React, { useContext } from 'react';
import "../pages/CSS/ShopCategory.css";
import { ShopContext } from '../Context/ShopContextProvider';
import drop_down from '../components/Assets/dropdown_icon.png';
import Item from '../components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className='Shop-category'>
      <img className="ShopCategory-banner" src={props.banner} alt='Category Banner' />

      <div className='shopCategory-indexSort'>
        <p>
          <span>Showing 1-12</span> out of {all_product.length} products
        </p>
        <div className='ShopCategory-sort'>
          Sort by <img src={drop_down} alt='Sort Icon' />
        </div>
      </div>

      <div className='shopCategory-products'>
        {all_product
          .filter(item => item.category === props.category)      // ✅ Cleaner filtering
          .map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
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
