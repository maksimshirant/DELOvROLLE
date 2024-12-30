import { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { clearCart } from '../store/cartSlice';
import st from '../styles/cart.module.scss'
import Button from '../button/Button';
import Modal from '../modal/Modal';
import OrderList from '../cards/OrderList';
import ProductItem from '../cards/ProductItem';



const Cart: FC = () => {
   // модальное окно для заказа
   const [modal, setModal] = useState<boolean>(false);
   // содержимое корзины
   const cartItems = useSelector((state: RootState) => state.cart.items);
   const dispatch = useDispatch();
   //очистка корзины
   const handleClearCart = () => {
      dispatch(clearCart());
   };
   // суммарная цена
   const totalPrice = cartItems.reduce((sum, item) => {
      const price: number = item.product.price
      return sum + (price * item.quantity);
   }, 0);

   return (

      <div className={st.cart__page}>
         <Modal visible={modal} setVisible={setModal}>
            {<OrderList setModal={setModal} totalPrice={totalPrice} cartItems={cartItems} />}
         </Modal>

         {cartItems.length === 0 ? (
            <div>
               <p className={st.cart__title}>Корзина пуста</p>

            </div>
         ) : (
            <div className={st.cart__choise}>
               <h1 className={st.cart__title}>Корзина:</h1>
               <div className={st.cart__items}>
                  {cartItems.map(item => (
                     <ProductItem key={item.product.id} product={item.product} onClick={() => { }} />
                  ))}
               </div>
               <div className={st.cart__total}>
                  <h2 >СУММА ЗАКАЗА: <span className={st.cart__summ}>{totalPrice}</span> руб.</h2>
                  <Button onClick={() => setModal(true)} >Оформить заказ</Button>
                  <Button onClick={handleClearCart}>Очистить корзину</Button>
               </div>

            </div>
         )
         }
      </div >
   );
};

export default Cart;


