import styled from "styled-components";

export const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;
export const ModalContainer = styled.div`
  width: 32rem;
  height: 12rem;
  border-radius: 10px;
  padding: 0 5rem;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  gap: 35%;
  label {
    color: var(--dark-blue);
    font-size: 1.2rem;
  }
  @media screen and (max-width: 550px) {
    padding: 0 1.5rem;
    width: 98%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
