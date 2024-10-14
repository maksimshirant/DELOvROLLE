import { FC } from 'react';
import st from '../styles/paggination.module.scss'


type PagginationProps = {
   currentPage: number;
   rollsPerPage: number;
   totalRolls: number;
   paginate: (pageNumber: number) => void;
};

const Paggination: FC<PagginationProps> = ({ currentPage, rollsPerPage, totalRolls, paginate }) => {
   const pageNumbers = [];

   for (let i = 1; i <= Math.ceil(totalRolls / rollsPerPage); i++) {
      pageNumbers.push(i);
   }

   return (
      <nav className={st.paggination__main}>
         <ul className={st.paggination}>
            {pageNumbers.map(number => (
               <li key={number} >
                  <button className={`${st.page} ${currentPage === number ? st.page__current : ''}`} onClick={() => paginate(number)} >
                     {number}
                  </button>
               </li>
            ))}
         </ul>
      </nav>
   );
};

export default Paggination;
