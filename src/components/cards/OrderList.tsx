import React, { FC, useState } from 'react';
import st from '../styles/order.module.scss'
import Button from '../button/Button';
import { InputMask } from 'primereact/inputmask';
import { CartItem } from '../types/productsType';
import { useDispatch } from 'react-redux';
import { clearCart } from '../store/cartSlice';
import { constPostRolls } from '../fetching/fetchRolls';
import { AppDispatch } from '../store/store';


type OrderListProps = {
   setModal: React.Dispatch<React.SetStateAction<boolean>>;
   totalPrice: number,
   cartItems: CartItem[];
};




const OrderList: FC<OrderListProps> = ({ setModal, totalPrice, cartItems }) => {
   const [name, setName] = useState('');
   const [street, setStreet] = useState('');
   const [houseNumber, setHouseNumber] = useState('');
   const [apartmentNumber, setApartmentNumber] = useState('');
   const [floor, setFloor] = useState('');
   const [comment, setComment] = useState('');
   const [formErrors, setFormErrors] = useState<string[]>([]);
   const [phone, setPhone] = useState('');

   const dispatch = useDispatch<AppDispatch>()

   const isFormValid =
      name.trim() !== '' &&
      phone.trim() !== '' &&
      street.trim() !== '' &&
      houseNumber.trim() !== '';

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      const errors: string[] = [];

      if (!name) {
         errors.push('Имя обязательно для заполнения.');
      }

      if (!street || !houseNumber) {
         errors.push('Улица и дом обязательны для заполнения.');
      }
      if (!phone) errors.push('Номер телефона обязателен для заполнения.');

      if (errors.length > 0) {
         setFormErrors(errors);
      } else {
         const formData = {
            name,
            phone,
            address: `${street}, ${houseNumber}, Квартира: ${apartmentNumber}, Этаж: ${floor}`,
            comment,
            totalPrice,
            cartItems,
         };

         try {
            await dispatch(constPostRolls(formData));
            alert('Заказ передан в сборку');
            console.log('Отправка данных:', formData);
            // Очистка формы
            setName('');
            setPhone('');
            setStreet('');
            setHouseNumber('');
            setApartmentNumber('');
            setFloor('');
            setComment('');
            setFormErrors([]);
            setModal(false);
            dispatch(clearCart());
         } catch (error) {
            alert('Произошла ошибка при отправке заказа');
            console.error('Ошибка:', error);
         }


      }


   };
   return (
      <div >
         <h2 className={st.title}>Заполните данные для заказа</h2>
         <form className={st.form} onSubmit={handleSubmit}>
            <div className={st.form}>
               <label className={st.title}>Имя:</label>
               <input className={st.input}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Введите ваше имя"
                  required
               />
            </div>


            <div className={st.form}>
               <label className={st.title}>Номер телефона:</label>
               <InputMask id="phone" className={st.input} required onChange={(e: any) => setPhone(e.target.value)} value={phone} mask="+7 (999) 999-99-99" placeholder="(___) ___-____"></InputMask>

            </div>


            <div >
               <div className={st.form}>
                  <label className={st.title}>Улица:</label>
                  <input
                     className={st.input}
                     type="text"
                     value={street}
                     onChange={(e) => setStreet(e.target.value)}
                     placeholder="Введите улицу"
                     required
                  />
               </div>
               <div className={st.form}>
                  <label className={st.title}>Дом:</label>

                  <input
                     className={st.input}
                     type="number"
                     value={houseNumber}
                     onChange={(e) => {
                        const value = e.target.value;

                        if (Number(value) <= 1000) {
                           setHouseNumber(value);
                        }
                     }}
                     placeholder="Введите номер дома"
                     required
                  />
               </div>
               <div className={st.form}>
                  <label className={st.title}>Квартира:</label>
                  <input
                     className={st.input}
                     type="number"
                     value={apartmentNumber}
                     onChange={(e) => {
                        const value = e.target.value;

                        if (Number(value) <= 1000) {
                           setApartmentNumber(e.target.value)
                        }
                     }}
                     placeholder="Введите номер квартиры"
                  />
               </div>
               <div className={st.form}>
                  <label className={st.title}>Этаж:</label>
                  <input
                     className={st.input}
                     type="number"
                     value={floor}
                     onChange={(e) => {
                        const value = e.target.value;

                        if (Number(value) <= 50) {
                           setFloor(e.target.value)
                        }
                     }}

                     placeholder="Введите номер этажа"
                  />
               </div>
            </div>

            <div className={st.form}>
               <label className={st.title}>Комментарий:</label>
               <textarea
                  className={st.input}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Введите комментарий"
               />
            </div>


            {formErrors.length > 0 && (
               <div >
                  <ul>
                     {formErrors.map((error, index) => (
                        <li className={st.errors} key={index}>{error}</li>
                     ))}
                  </ul>
               </div>
            )}


            <div>
               <Button onClick={handleSubmit} disabled={!isFormValid} >Оформить заказ</Button>
            </div>
         </form>
      </div>
   );
}


export default OrderList;