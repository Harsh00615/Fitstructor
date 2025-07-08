// import React from 'react';
// import "./Item.css";
// import { Link } from 'react-router-dom';

// const Item = (props) => {
//   return (
//     <div className='item'>
//         <Link to={`/Product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt ="outfit"></img></Link>
//         <p>{props.name}</p>
//         <div className="Item-price">
//             <div className="new_price">
//                 ${props.new_price}
//             </div>
//             <div className="old_price">
//                 ${props.old_price}
//             </div>
//         </div>
//     </div>
//   )
// }
// export default Item;


import React from 'react';
import './Item.css';
import { useNavigate } from 'react-router-dom';

const Item = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo(0, 0); // Scroll to top
    navigate(`/shop/Product/${props.id}`); // Navigate to product page
  };

  return (
    <div className='item' onClick={handleClick} style={{ cursor: 'pointer' }}>
      <img src={props.image} alt="outfit" />
      <p>{props.name}</p>
      <div className="Item-price">
        <div className="new_price">${props.new_price}</div>
        <div className="old_price">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;

