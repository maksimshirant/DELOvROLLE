
import { Link } from 'react-router-dom';
import st from './styles/navbar.module.scss'

const Navbar = () => {
   return (
      <nav className={st.navbar} >
         <div className={st.logo}>
            <span className={st.logo1}>DELO</span>
            <span className={st.logo2}>V</span>
            <span className={st.logo3}>ROLLE</span>
         </div>
         <div className={st.navbar__line}>
            <Link className={st.navbar__item} to='/'><img src="/img/главная.png" alt="" /></Link>
            <Link className={st.navbar__item} to='/about'><img src="/img/инфо.png" alt="" /></Link>
            <Link className={st.navbar__item} to='/delivery'><img src="/img/доставка.png" alt="" /></Link>
            <Link className={st.navbar__item} to='/cart'><img src="/img/корзина.png" alt="" /></Link>
         </div>
      </nav>
   );
};

export default Navbar;