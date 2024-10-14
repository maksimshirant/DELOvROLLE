
import { FC } from 'react';
import st from '../styles/select.module.scss'



type Option = {
   value: string;
   name: string;
};
type DefaultValue = {
   defaultValue: any,
   options: Option[],
   value: string;
   onChange: (value: string) => void;

}


const Select: FC<DefaultValue> = ({ options, defaultValue, value, onChange }) => {
   return (
      <select
         className={st.select}
         value={value}
         onChange={event => onChange(event.target.value)}>
         <option disabled value=''>{defaultValue}</option>
         {options.map(option =>
            <option
               key={option.value}
               value={option.value}>
               {option.name}
            </option>)}
      </select>
   );
};

export default Select;