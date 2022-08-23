import React from "react";
import Button from "../Button";

import { ButtonContainer, ModalBackground, ModalContainer } from "./styles";
type Props = {
  text: string;
  onClick: () => void;
  setModal: (value: Boolean) => void;
  modal: Boolean;
};
function Modal({ text, setModal, modal, onClick }: Props) {
  return (
    <ModalBackground>
      <ModalContainer>
        <label>{text}</label>
        <ButtonContainer>
          <Button
            color="var(--dark-blue)"
            onClick={() => setModal(!modal)}
            text="Cancel"
            type="button"
          />
          <Button
            color="var(--red-error)"
            onClick={onClick}
            text="Remove"
            type="button"
          />
        </ButtonContainer>
      </ModalContainer>
    </ModalBackground>
  );
}

export default Modal;
