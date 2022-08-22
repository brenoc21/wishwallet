import React from 'react';

import { InputContainer } from './styles';
type Props = {
    title: string,
    type: React.HTMLInputTypeAttribute,
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void,
    error: Boolean
}
function Input({title, type, onChange, error}: Props){
  return (
    <InputContainer error={error}><label>{title}</label>
    <input step="any" min={0} type={type} required onChange={onChange} /></InputContainer>
  );
}

export default Input;