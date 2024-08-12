
import { FC } from 'react';
import st from '../styles/cardItem.module.scss'
import Button from '../button/Button';

interface Product {
   id: number;
   name: string;
   weight: string;
   ingredients: string[];
   price: string;
   img: string,
   much: string

}
const CardItem: FC<{ product: Product, onClick: () => void }> = ({ product, onClick }) => {



   return (
      <div key={product.id} className={st.card__item} onClick={onClick}>
         <div>
            <div className={st.card__img}>
               <img width="200" height="222" src={product.img} alt={product.name} />
            </div>
            <h2 className={st.card__name}>{product.name}</h2>
            <h3 className={st.card__weight}>Вес: {product.weight} / {product.much} шт.</h3>
         </div>
         <div className={st.card__add}>
            <div className={st.card__prise}>{product.price}</div>
            <div>
               <Button >В корзину</Button>


            </div>
         </div>
      </div >
   );
};

export default CardItem;