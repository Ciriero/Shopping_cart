import styled from "styled-components";

export const LibraryContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 5rem;
  width: 400px;
  background-color: #f2f7f5;
  height: 70%;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  transform: ${(props) =>
    props.isOpen ? "translate(0%)" : "translate(-100%)"};
  transition: 1s all ease-in-out;
  padding: 1rem;
  z-index: 10;
    a {
        margin: 4rem 0;
  font-size: 1.5rem;
  color: black;
    }
    @media screen and (min-width: 992px) {
        display: none;
    }
  `