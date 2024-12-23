import { FC } from 'react';
import st from '../styles/itemInfo.module.scss'

import Button from '../button/Button';
import { addToCart, decrementQuantity, incrementQuantity } from '../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';




type InfoProps = {
   rolls: any
}

const ItemInfo: FC<InfoProps> = ({ rolls }) => {
   const dispatch = useDispatch()
   const cartItem = useSelector((state: RootState) =>
      state.cart.items.find(item => item.product.id === rolls.id)
   );
   return (
      <div className={st.info}>
         <div><img src={rolls.img} width="300" height="322" alt="" /></div>
         <h1 className={st.info__name}>{rolls.name}</h1>
         <p className={st.info__legend}>{rolls.legend}</p>
         <p className={st.info__weight}>Вес: {rolls.weight}</p>
         <p className={st.info__ingredients}>Ингредиенты: {rolls.ingredients.join(', ')}</p>
         <p className={st.info__prise}>{rolls.price} руб. за {rolls.much} шт.</p>
         <div className={st.info__bottom}>

            <div >
               {cartItem ? (
                  <div className={st.card__quantity}>
                     <button className={st.card__quantiti__btn} onClick={() => dispatch(decrementQuantity(rolls.id))}>-</button>
                     <span className={st.card__quantity__count}>{cartItem.quantity}</span>
                     <button className={st.card__quantiti__btn} onClick={() => dispatch(incrementQuantity(rolls.id))}>+</button>
                  </div>
               ) : (
                  <Button onClick={() => dispatch(addToCart(rolls))}>В корзину</Button>
               )}
            </div>
         </div>
      </div>
   );
};

export default ItemInfo;

