import styled from "styled-components";

export const Container = styled.div`
  & > section {
    display: flex;
    justify-content: space-between;

    & > div {
      display: flex;
      flex-direction: row;
      align-items: center;

      label {
        font-size: 1.2rem;
        color: #fff;
      }

      button {
        background: none;
        border: 0;
        color: #fff;
        padding: 20px;
      }
    }

    @media (max-width: 991px) {
      flex-direction: column;

      & > div {
        margin: 10px;
        justify-content: center;
      }
    }
  }
`;
