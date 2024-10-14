import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { removeFromCart, clearCart } from '../store/cartSlice';
import st from '../styles/cart.module.scss'
import Button from '../button/Button';
import style from '../styles/itemInfo.module.scss'


const Cart: FC = () => {
   const cartItems = useSelector((state: RootState) => state.cart.items);
   const dispatch = useDispatch();
   const handleClearCart = () => {
      dispatch(clearCart());
   };
   const handleRemove = (id: number) => {
      dispatch(removeFromCart(id));
   };



   const totalPrice = cartItems.reduce((sum, item) => {
      const price: number = item.product.price
      return sum + (price * item.quantity);
   }, 0);

   return (
      <div className={st.cart__page}>
         <h1 className={st.cart__title}>Корзина:</h1>
         {cartItems.length === 0 ? (
            <div>
               <p className={st.cart__text}>Нет добавленных товаров...</p>
               <div style={{ textAlign: 'center' }}><img src="/img/sad.png" alt="" /></div>
            </div>
         ) : (
            <div className={st.cart__choise}>
               <ul className={st.cart__items}>
                  {cartItems.map(item => (
                     <li className={st.cart__item} key={item.product.id}>
                        <div className={style.card__img}>
                           <img width="200" height="222" src={item.product.img} alt={item.product.name} />
                        </div>
                        <h2 className={style.card__name}>{item.product.name}</h2>
                        <h3 className={style.card__weight}>{item.quantity} шт.</h3>
                        <h3 className={style.info__prise}>{item.product.price} руб.</h3>
                        <Button onClick={() => handleRemove(item.product.id)}>Удалить</Button>
                     </li>
                  ))}
               </ul>
               <div className={st.cart__total}>
                  <h2 >СУММА ЗАКАЗА: <span className={st.cart__summ}>{totalPrice}</span> руб.</h2>
                  <div className={st.cart__delete__button}><Button >Оформить заказ</Button></div>
                  <div className={st.cart__delete__button}><Button onClick={handleClearCart}>Очистить корзину</Button></div>
               </div>

            </div>
         )
         }
      </div >
   );
};

export default Cart;
function dispatch(arg0: { payload: undefined; type: "cart/clearCart"; }) {
   throw new Error('Function not implemented.');
}

