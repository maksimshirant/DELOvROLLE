import React, { FC, useCallback, useState } from 'react';
import st from '../styles/order.module.scss'
import Button from '../button/Button';

type OrderListProps = {
   setModal: React.Dispatch<React.SetStateAction<boolean>>;
   totalPrice: number,
   cartItems: any   // ИСПРАВИТЬ ANY
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

   const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
      alert('Заказ выполнен');
   }, []);
   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      const errors: string[] = [];

      if (!name) {
         errors.push('Имя обязательно для заполнения.');
      }

      if (!street || !houseNumber) {
         errors.push('Улица и дом обязательны для заполнения.');
      }

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
         console.log('Отправка данных:', formData);


         setName('');
         setPhone('');
         setStreet('');
         setHouseNumber('');
         setApartmentNumber('');
         setFloor('');
         setComment('');
         setFormErrors([]);
         setModal(false)
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
               <input className={st.input}
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  maxLength={12}
                  placeholder="+7 (___) ___-__-__"
                  required
               />

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
                     type="text"
                     value={houseNumber}
                     onChange={(e) => setHouseNumber(e.target.value)}
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
                     onChange={(e) => setApartmentNumber(e.target.value)}
                     placeholder="Введите номер квартиры"
                  />
               </div>
               <div className={st.form}>
                  <label className={st.title}>Этаж:</label>
                  <input
                     className={st.input}
                     type="number"
                     value={floor}
                     onChange={(e) => setFloor(e.target.value)}
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
               <div style={{ color: 'red' }}>
                  <ul>
                     {formErrors.map((error, index) => (
                        <li key={index}>{error}</li>
                     ))}
                  </ul>
               </div>
            )}


            <div>
               <Button onClick={handleClick} >Отправить</Button>
            </div>
         </form>
      </div>
   );
}


export default OrderList;