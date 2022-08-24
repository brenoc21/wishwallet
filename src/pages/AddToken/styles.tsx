import styled from "styled-components";

export const AddTokenContent = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;
export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const FormContainet = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const ButtonRow = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
