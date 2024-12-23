
import React, { FC } from 'react';
import st from '../styles/button.module.scss';

type ButtonProps = {

   onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;  // Обработчик клика с аргументом
   children?: string;
};

const Button: FC<ButtonProps> = ({ children, onClick }) => {
   return (
      <button onClick={(e) => {
         e.stopPropagation();
         if (onClick) {
            onClick(e);
         }
      }}
         className={st.button}>
         {children}
      </button>
   );
};

export default Button;