import React from 'react';
import st from './styles/footer.module.scss'
import { Link } from 'react-router-dom';


const Footer = () => {
   return (
      <div className={st.footer}>
         <div className={st.footer__item}>
            <h3 className={st.footer__title}>Навигация:</h3>
            <Link className={st.footer__links} to='/'>Главная</Link>
            <Link className={st.footer__links} to='/delivety'>Доставка</Link>
            <Link className={st.footer__links} to='/about'>О нас</Link>
         </div>
         <div className={st.footer__item}>
            <h3 className={st.footer__title}>Время работы:</h3>
            <p className={st.footer__links}> Пн-Пт: 9:00 - 23:00</p>
            <p className={st.footer__links}>Сб-Вскр: 9:00 - 0:00</p>
         </div>
         <div className={st.footer__item}>
            <h3 className={st.footer__title}>Оформить заказ:</h3>
            <p className={st.footer__links}>8-999-626-44-15</p>
            <p className={st.footer__links}>8-905-399-33-99</p>
         </div>

      </div>
   );
};

export default Footer;