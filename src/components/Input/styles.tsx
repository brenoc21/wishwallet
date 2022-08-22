import styled from "styled-components";

interface Props {
    error: Boolean
}
export const InputContainer = styled.div<Props>`
display: flex;
flex-direction: column;
gap: 0.5rem;

input{
    
    width: 100%;
    background-color: var(--white);
    border: ${props=> props.error ? "2px solid var(--red-error)" : "2px solid transparent"};
    height: 2rem;
    border-radius: 0.2rem;
    color: black;
    padding: 0 1rem;
    :focus{
        outline: none;
    }
}
`