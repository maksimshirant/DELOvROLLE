
import st from '../styles/productList.module.scss'
import { Products } from '../types/productsType';
import { FC } from 'react';
import ProductItem from './ProductItem';

// Тип для пропса в компонент списка
type ProductListProps = {
   rolls: Products[];
   onRollSelect: (product: Products) => void;
   setModal: (visible: boolean) => void;

};

const ProductList: FC<ProductListProps> = ({ rolls, setModal, onRollSelect }) => {

   return (
      <div
         className={st.card__list}>
         {rolls.map((product) =>
            <div key={product.id}>
               <ProductItem onClick={() => {
                  onRollSelect(product);
                  setModal(true);
               }} product={product} />
            </div>)}
      </div>
   );
};

export default ProductList;