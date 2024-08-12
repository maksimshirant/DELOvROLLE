import { FC, useState } from 'react';

import CardList from '../cards/CardList';
import Select from '../select/Select';
import Modal from '../modal/Modal';
import ItemInfo from '../cards/CartItemInfo';
import { useDispatch, useSelector } from 'react-redux';
import { Products, sortRolls } from '../store/rollsSlice';
import { RootState } from '../store/store';


const Home: FC = () => {

   const [selectedSort, setSelectedSort] = useState<string>('');
   const [modal, setModal] = useState<boolean>(false);
   const [selectedRoll, setSelectedRoll] = useState<Products | null>(null);

   const rolls = useSelector((state: RootState) => state.rolls);
   const dispatch = useDispatch();

   const sortPosts = (sort: string) => {
      setSelectedSort(sort);
      dispatch(sortRolls(sort));
   }

   // Функция сортировки 

   return (
      <div>
         <Modal visible={modal} setVisible={setModal}>
            {selectedRoll && <ItemInfo rolls={selectedRoll} />}
         </Modal>
         <Select
            value={selectedSort}
            onChange={sortPosts}
            defaultValue='Сортировка'
            options={[
               { value: 'nameAZ', name: 'От А до Я' },
               { value: 'nameZA', name: 'От Я до А' },
               { value: 'priceLow', name: 'Дешевле' },
               { value: 'priceHigh', name: 'Дороже' },
               { value: 'lowWeight', name: 'Перекусить' },
               { value: 'highWeight', name: 'Объесться' },
            ]} />
         <CardList rolls={rolls} setModal={setModal} onRollSelect={setSelectedRoll} />
      </div>
   );
};

export default Home;