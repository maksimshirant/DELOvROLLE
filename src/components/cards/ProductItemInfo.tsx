
import React from 'react';
import ProductItem, { Product } from './ProductItem';
import st from '../styles/productItem.module.scss'

type ProductItemInfoProps = {
   product: Product;
};

const ProductItemInfo: React.FC<ProductItemInfoProps> = ({ product }) => {
   return (
      <>
         <ProductItem product={product} onClick={() => { }} className={st.noHoverBorder} isModal />
      </>
   );
};


export default ProductItemInfo;


