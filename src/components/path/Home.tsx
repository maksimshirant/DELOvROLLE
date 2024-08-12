import { FC, useEffect, useState } from 'react';
import CardList from '../cards/CardList';
import Select from '../select/Select';
import Modal from '../modal/Modal';
import ItemInfo from '../cards/CartItemInfo';
import { useDispatch, useSelector } from 'react-redux';
import { sortRolls } from '../store/rollsSlice';
import { RootState } from '../store/store';
import { fetchRolls } from '../fetching/fetchRolls';
import { Products } from '../types/productsType';




const Home: FC = () => {

   //Состояние выбранной сортировки
   const [selectedSort, setSelectedSort] = useState<string>('');
   // Состояние модального окна
   const [modal, setModal] = useState<boolean>(false);
   // Состояние выбранных роллов
   const [selectedRoll, setSelectedRoll] = useState<Products | null>(null);



   const dispatch = useDispatch();
   //  Получил массив роллов
   const rolls = useSelector((state: RootState) => state.rolls);


   // Запуск со старта
   useEffect(() => {
      dispatch(fetchRolls());
   }, [dispatch]);

   // Уже отсортированный ролл
   const sortPosts = (sort: string) => {
      setSelectedSort(sort);
      dispatch(sortRolls(sort));
   }

   return (
      <div>
         {/* Модальное окно выбранного ролла ролла */}
         <Modal visible={modal} setVisible={setModal}>
            {selectedRoll && <ItemInfo rolls={selectedRoll} />}
         </Modal>
         {/* Сортировка */}
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
         {/* Список роллов */}
         <CardList rolls={rolls} setModal={setModal} onRollSelect={setSelectedRoll} />
      </div>
   );
};

export default Home;