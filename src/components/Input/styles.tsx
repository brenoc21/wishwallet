import styled from "styled-components";

interface Props {
  error: Boolean;
}
export const InputContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  label {
    display: flex;
    flex-direction: c;
    gap: 1rem;
  }
  input {
    width: 100%;
    background-color: var(--white);
    border: ${(props) =>
      props.error ? "2px solid var(--red-error)" : "2px solid transparent"};
    height: 2rem;
    border-radius: 0.2rem;
    color: black;
    padding: 0 1rem;

    :focus {
      outline: none;
    }
  }
`;
export const ErrorMsg = styled.b`
  color: var(--red-error);
`;
