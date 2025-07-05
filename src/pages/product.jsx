// import React from 'react';
// import { useContext } from 'react';
// import { useParams } from 'react-router-dom';
// import { ShopContext } from '../Context/ShopContextProvider';
// import { Breadcrums } from '../components/Breadcrums/Breadcrums';
// import { ProductDisplay } from '../components/ProductDisplay/ProductDisplay';
// import { RelatedProduct } from '../components/RelatedProducts/RelatedProduct';

// export const Product = () => {
//   const {all_product} = useContext(ShopContext);
//   const {productId} = useParams();
//   const product = all_product.find((e)=> e.id === Number(productId));
//   return (
//     <div>
//       <Breadcrums product={product}/>
//       <ProductDisplay product={product}/>
//       <RelatedProduct/>
//     </div>
//   )
// }
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContextProvider';
import Breadcrums from '../components/Breadcrums/Breadcrums';           // ✅ Fixed import
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'; // ✅ Fixed import
import RelatedProduct from '../components/RelatedProducts/RelatedProduct'; // ✅ Fixed import

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <RelatedProduct />
    </div>
  );
};

export default Product;
