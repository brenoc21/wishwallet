import styled from "styled-components";

export const TitleRow = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
`;

export const TokenContainer = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  p{
    text-align: center;
  }
`;
export const TokenTable = styled.table`
  width: 100%;
  height: auto;
`;
export const TokenHeader = styled.thead`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .editBox {
    width: 1.2rem;
  }

  td {
    width: auto;
    color: var(--white);
    &:last-child {
      margin-left: auto;
      text-align: end;
    }
    &:first-child {
      padding: 1rem;
    }
  }
`;
export const TokenBody = styled.tbody`
  tr {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .editBox {
      width: 1.2rem;
      cursor: pointer;
      img {
        width: 100%;
        min-width: 1.2rem;
        height: auto;
        align-items: center;
      }
    }
    .item {
      &:last-child {
        margin-left: auto;
        text-align: end;
        padding: 0;
      }
      padding: 1rem;
      color: var(--white);
      font-weight: 600;
      font-size: 1.5rem;
    }
  }
`;
