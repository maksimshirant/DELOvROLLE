
import { FC } from 'react';
import st from '../styles/cardItem.module.scss'
import Button from '../button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decrementQuantity, incrementQuantity } from '../store/cartSlice';
import { RootState } from '../store/store';


export interface Product {
   id: number;
   name: string;
   weight: string;
   ingredients: string[];
   price: number;
   img: string,
   much: string

}
const CardItem: FC<{ product: Product, onClick: () => void }> = ({ product, onClick }) => {
   const dispatch = useDispatch();


   const cartItem = useSelector((state: RootState) =>
      state.cart.items.find(item => item.product.id === product.id)
   );
   const handleAddToCart = (e: React.MouseEvent) => {
      e.stopPropagation();
      dispatch(addToCart(product));
   };
   const zoneClick = (e: any) => {
      e.stopPropagation();
   }
   const handleIncrement = (e: React.MouseEvent) => {
      e.stopPropagation();
      dispatch(incrementQuantity(product.id));
   };

   const handleDecrement = (e: React.MouseEvent) => {
      e.stopPropagation();
      dispatch(decrementQuantity(product.id));
   };


   return (
      <div key={product.id} className={st.card__item} onClick={onClick}>
         <div>
            <div className={st.card__img}>
               <img width="200" height="222" src={product.img} alt={product.name} />
            </div>
            <h2 className={st.card__name}>{product.name}</h2>
            <h3 className={st.card__weight}>Вес: {product.weight} / {product.much} шт.</h3>
         </div>
         <div className={st.card__add}>
            <div className={st.card__prise}>{product.price} руб.</div>
            <div>
               {cartItem ? (
                  <div className={st.card__quantity} onClick={zoneClick}>
                     <button className={st.card__quantiti__btn} onClick={handleDecrement} >-</button>
                     <span className={st.card__quantity__count}>{cartItem.quantity}</span>
                     <button className={st.card__quantiti__btn} onClick={handleIncrement}>+</button>
                  </div>
               ) : (
                  <Button onClick={handleAddToCart}>В корзину</Button>
               )}
            </div>
         </div>
      </div >
   );
};

export default CardItem;