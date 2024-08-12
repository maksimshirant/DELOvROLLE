import { FC } from 'react';
import st from '../styles/modal.module.scss'


type ModalChildren = {
   children?: any,
   visible: boolean;
   setVisible: any;

}

const Modal: FC<ModalChildren> = ({ children, visible, setVisible }) => {
   const rootClasses = [st.modal]
   if (visible) {
      rootClasses.push(st.modal__active)
   }
   return (
      <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
         <div className={st.modal__content} onClick={(e) => e.stopPropagation()}>
            {children}
         </div>
      </div>
   );
};

export default Modal;