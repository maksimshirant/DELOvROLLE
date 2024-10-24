import { FC } from 'react';
import st from '../styles/itemInfo.module.scss'

import Button from '../button/Button';




type InfoProps = {
   rolls: any
}

const ItemInfo: FC<InfoProps> = ({ rolls }) => {

   return (
      <div className={st.info}>
         <div><img src={rolls.img} width="300" height="322" alt="" /></div>
         <h1 className={st.info__name}>{rolls.name}</h1>
         <p className={st.info__legend}>{rolls.legend}</p>
         <p className={st.info__weight}>Вес: {rolls.weight}</p>
         <p className={st.info__ingredients}>Ингредиенты: {rolls.ingredients.join(', ')}</p>

         <div className={st.info__bottom}>
            <p className={st.info__prise}>{rolls.price} руб. за {rolls.much} шт.</p>
            <Button>В корзину</Button>
            <p> </p>
         </div>
      </div>
   );
};

export default ItemInfo;