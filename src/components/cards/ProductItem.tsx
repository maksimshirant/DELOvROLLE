
import { FC } from 'react';
import st from '../styles/productItem.module.scss'
import CartActions from './CartActions';


export interface Product {
   id: number;
   name: string;
   weight: string;
   ingredients: string[];
   price: number;
   img: string,
   much: string,
   legend: string,

}
const ProductItem: FC<{ product: Product, onClick: () => void, className?: string, isModal?: boolean }> = ({ product, onClick, className, isModal = false }) => {

   return (
      <div key={product.id} className={`${st.card__item} ${className || ''}`} onClick={onClick}>
         <div>
            <div >
               <img width="200" height="222" src={product.img} alt={product.name} />
            </div>
            <h2 className={st.card__name}>{product.name}</h2>
            <h3 className={st.card__weight}>Вес: {product.weight} / {product.much} шт.</h3>
            {isModal && (
               <div className={st.card__info}>
                  <p className={st.info__ingredients}>Ингредиенты: {product.ingredients.join(', ')}</p>
                  <p className={st.info__legend}>{product.legend}</p>
               </div>
            )}
         </div>
         <div className={st.card__add}>
            <CartActions product={product} />
         </div>
      </div >
   );
};

export default ProductItem;