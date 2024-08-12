
import CardItem from './CardItem';
import st from '../styles/cardList.module.scss'
import { Products } from '../store/rollsSlice';
import { FC } from 'react';

// Тип для пропса в компонент списка
type CardListProps = {
   rolls: Products[];
   onRollSelect: (product: Products) => void;
   setModal: (visible: boolean) => void;
};

const CardList: FC<CardListProps> = ({ rolls, setModal, onRollSelect }) => {

   return (
      <div
         className={st.card__list}>
         {rolls.map((product) =>
            <div key={product.id}>
               <CardItem onClick={() => {
                  onRollSelect(product);
                  setModal(true);
               }} product={product} />
            </div>)}
      </div>
   );
};

export default CardList;