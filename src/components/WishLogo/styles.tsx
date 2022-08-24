import styled from "styled-components";

export const WishBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 30rem;
  p {
    font-size: 2rem;
    font-weight: 600;
    color: var(--white);
  }
  img {
    min-width: 3rem;
    width: 2vw;
    height: auto;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
    p {
      font-size: 1.8rem;
    }
    img {
      min-width: 2.6rem;
    }
  }
`;
export const ContentContainer = styled.div``;
