import React from "react";

import { ButtonBackground } from "./styles";

type Props = {
    text: string,
    onClick: () => void,
    color: string,
  };
function Button({ color, onClick, text } : Props) {
  return (
    <ButtonBackground color={color} onClick={onClick}>
      <label>{text}</label>
    </ButtonBackground>
  );
}

export default Button;
