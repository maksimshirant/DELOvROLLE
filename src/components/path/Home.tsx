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
import Paggination from '../paggination/Paggination';
;




const Home: FC = () => {

   //Состояние выбранной сортировки
   const [selectedSort, setSelectedSort] = useState<string>('');
   // Состояние модального окна
   const [modal, setModal] = useState<boolean>(false);
   // Состояние выбранных роллов
   const [selectedRoll, setSelectedRoll] = useState<Products | null>(null);
   // Паггинация
   const [currentPage, setCurrentPage] = useState<number>(1);
   const rollsPerPage = 8; // Количество роллов на странице

   // При смене типа сортировки отлетаем на первую страницу
   useEffect(() => {
      setCurrentPage(1)
   }, [selectedSort]);

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
   // Расчет для пагинации
   const indexOfLastRoll = currentPage * rollsPerPage;
   const indexOfFirstRoll = indexOfLastRoll - rollsPerPage;
   const currentRolls = rolls.slice(indexOfFirstRoll, indexOfLastRoll);

   // Функция для пагинации
   function paginate(pageNumber: number): void {
      setCurrentPage(pageNumber);
      // автоматическая прокрутка вверх при выборе страницы
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
         <CardList
            rolls={currentRolls}
            setModal={setModal}
            onRollSelect={setSelectedRoll} />
         <Paggination
            currentPage={currentPage}
            rollsPerPage={rollsPerPage}
            totalRolls={rolls.length}
            paginate={paginate} />
      </div>
   );
};

export default Home;