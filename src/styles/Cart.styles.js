import styled from "styled-components";

export const CartContainer = styled.section`
  width: 400px;
  height: 100vh;
  margin: 3rem auto;
  hr {
    margin-top: 3rem;
  }
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

export const CartItems = styled.article`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;

  .image {
    display: flex;
    align-items: center;
  }

  .image img {
    height: 100px;
    object-fit: cover;
  }
`;
