import styled from "styled-components";

export const CartContainer = styled.section`
  width: 400px;
  height: 70vh;
  margin: 3rem auto;
  border: 1px solid black;
  .total {
    margin: 1rem;
    h3 {
      display: flex;
      justify-content: space-between;
    }
  }
  @media screen and (min-width: 800px) {
    width: 80vh;
    max-height: 70vh;
    max-width: 80vw;
    margin: 3rem auto;
    border: 1px solid black;
  }
`;

export const ButtonRmv = styled.button`
  margin-bottom: 3rem;
  border: none;
  padding: 0.8rem;
  border-radius: 0.25rem;
  background-color: var(--clr-red2);
  color: black;
  transition: 0.3s all ease-in-out;
  cursor: pointer;
  :hover {
    background-color: var(--clr-red);
  }
  @media screen and (min-width: 800px) {
    margin-bottom: 10rem;
  }
`;
