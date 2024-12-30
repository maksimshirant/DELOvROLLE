
import st from './styles/footer.module.scss'



const Footer = () => {
   return (
      <div className={st.footer}>
         <div className={st.footer__item}>
            <h3 className={st.footer__title}>Время работы:</h3>
            <p className={st.footer__title}> Пн-Пт: 9:00 - 23:00</p>
            <p className={st.footer__title}>Сб-Вскр: 9:00 - 0:00</p>

         </div>
      </div>
   );
};

export default Footer;