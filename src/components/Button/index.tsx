import React from "react";

import { ButtonBackground } from "./styles";

type Props = {
    text: string,
    onClick: () => void,
    color: string,
    type: "button" | "submit" | "reset"
  };
function Button({ color, onClick, text, type } : Props) {
  return (
    <ButtonBackground type={type} color={color} onClick={onClick}>
      {text}
    </ButtonBackground>
  );
}

export default Button;
