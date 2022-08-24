import styled from "styled-components";

export const EditTokenContent = styled.div`
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
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 550px) {
    gap: 1rem;
    justify-content: center;
    flex-direction: column;
  }
`;
