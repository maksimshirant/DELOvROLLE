
import React, { FC } from 'react';
import st from '../styles/button.module.scss';

type ButtonProps = {
   children: string;
   onClick?: () => void;
};

const Button: FC<ButtonProps> = ({ children, onClick }) => {
   return (
      <button onClick={(e) => {
         e.stopPropagation();
         if (onClick) {
            onClick();
         }
      }}
         className={st.button}>
         {children}
      </button>
   );
};

export default Button;