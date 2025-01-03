
import { Link } from 'react-router-dom';
import st from './styles/navbar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faHouse, faLocationDot, faPhone, faTruck } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
   const cartItems = useSelector((state: RootState) => state.cart.items);

   // Считаем общее количество товаров
   const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
   return (
      <nav className={st.navbar} >
         <div className={st.logo}>
            <span className={st.logotext}> VLZ</span>
            <span className={st.logohighlight}>Roll</span>
            <span className={st.logotext}>34</span>
            <div ><a className={st.tg} href="https://t.me/maksimshirant"><FontAwesomeIcon icon={faTelegram} /></a></div>
         </div>
         <div>
            <h1 className={st.phone}><FontAwesomeIcon icon={faPhone} />  8-999-626-44-15</h1>
         </div>

         <div className={st.navbar__line}>
            <Link className={st.navbar__item} to='/'><FontAwesomeIcon icon={faHouse} /></Link>
            <Link className={st.navbar__item} to='/delivery'><FontAwesomeIcon icon={faLocationDot} /></Link>
            <Link className={st.navbar__item} to='/cart'><FontAwesomeIcon icon={faBagShopping} /><span className={st.navbar__count}>{totalQuantity === 0 ? null : totalQuantity}</span></Link>
         </div>
      </nav>
   );
};

export default Navbar;