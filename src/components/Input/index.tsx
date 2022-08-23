import React from "react";

import { ErrorMsg, InputContainer } from "./styles";
type Props = {
  title: string;
  type: React.HTMLInputTypeAttribute;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: Boolean;
  value: string | number | readonly string[] | undefined;
  errorMsg: string;
};
function Input({ title, type, onChange, error, value, errorMsg }: Props) {
  return (
    <InputContainer error={error}>
      <label>
        {title} {error ? <ErrorMsg>{errorMsg}</ErrorMsg> : null}
      </label>
      <input
        value={value}
        step="any"
        min={0}
        type={type}
        required
        onChange={onChange}
      />
    </InputContainer>
  );
}

export default Input;
