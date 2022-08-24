import React, { useEffect, useRef } from "react";
import Button from "../Button";

import { ButtonContainer, ModalBackground, ModalContainer } from "./styles";
type Props = {
  text: string;
  onClick: () => void;
  setModal: (value: Boolean) => void;
  modal: Boolean;
};
function Modal({ text, setModal, modal, onClick }: Props) {
  let ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    let handler = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as HTMLDivElement)
      ) {
        setModal(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <ModalBackground>
      <ModalContainer ref={ref}>
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
            text="Confirm"
            type="button"
          />
        </ButtonContainer>
      </ModalContainer>
    </ModalBackground>
  );
}

export default Modal;
