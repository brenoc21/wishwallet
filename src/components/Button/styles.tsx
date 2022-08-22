import styled from "styled-components";

export const ButtonBackground = styled.button`
  background-color: ${(props) => props.color};
  width: 8rem;
  min-width: 8rem;
  height: 2.3rem;
  color: var(--white);
  font-weight: 600;
  border-radius: 0.3rem;
  cursor: pointer;
  align-self: flex-end;
  border: none;
    cursor: pointer;
  
  :hover {
    filter: brightness(0.9);
  }
`;
