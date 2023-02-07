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
  color: var(--bg-color);
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
    img {
      height: 100px;
      object-fit: cover;
    }
    .title,
    .price,
    .author,
    .delete {
      margin-left: 2rem;
    }
    .price,
    .author,
    .delete {
      margin-bottom: 0.7rem;
    }
    .title {
      font-style: italic;
      font-weight: 700;
    }
    .price {
      margin-top: 0.5rem;
      color: grey;
      font-style: italic;
    }
    .delete {
      padding: 0 0.3rem;
      background: transparent;
      cursor: pointer;
      letter-spacing: 0.1rem;
      border: none;
      font-size: 1rem;
    }
  }
`;

export const BtnAmount = styled.button`
  width: 1rem;
  border: none;
  background: transparent;
  cursor: pointer;
`;
