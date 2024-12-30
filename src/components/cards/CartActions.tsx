// CardItemActions.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decrementQuantity, incrementQuantity } from '../store/cartSlice';
import { RootState } from '../store/store';
import Button from '../button/Button';
import st from '../styles//productItem.module.scss';
import { Product } from './ProductItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

interface CartActionsProps {
   product: Product;
}

const CartActions: React.FC<CartActionsProps> = ({ product }) => {
   const dispatch = useDispatch();

   const cartItem = useSelector((state: RootState) =>
      state.cart.items.find(item => item.product.id === product.id)
   );

   const handleAddToCart = () => {
      dispatch(addToCart(product));
   };

   const handleIncrement = () => {
      dispatch(incrementQuantity(product.id));
   };

   const handleDecrement = () => {
      dispatch(decrementQuantity(product.id));
   };

   return (
      <div className={st.card__add}>
         <div className={st.card__prise}>{product.price} руб.</div>
         <div>
            {cartItem ? (
               <div className={st.card__quantity} onClick={(e) => e.stopPropagation()}>
                  <button className={st.card__quantiti__btn} onClick={handleDecrement}><FontAwesomeIcon icon={faMinus} /></button>
                  <span className={st.card__quantity__count}>{cartItem.quantity}</span>
                  <button className={st.card__quantiti__btn} onClick={handleIncrement}><FontAwesomeIcon icon={faPlus} /></button>
               </div>
            ) : (
               <Button onClick={handleAddToCart}>В корзину</Button>
            )}
         </div>
      </div>
   );
};

export default CartActions;
