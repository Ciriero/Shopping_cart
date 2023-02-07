import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: var(--bg-color);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  box-shadow: var(--box-sh-footer);
  display: flex;
  justify-content: space-around;
 
  svg {
    height: 5rem;
    width: 1.5rem;
    cursor: pointer;
  }
 
  .number-container {
    position: relative;

    .number {
      position: absolute;
      z-index: 99;
      height: 20px;
      width: 20px;
      color: var(--bg-color);
      background-color: var(--var-bg);
      color: black;
      line-height: 20px;
      text-align: center;
      border-radius: 50%;
      top: 1.1rem;
      right: -0.9rem;
    }
  }
  @media screen and (min-width: 800px){
    display: none
  }

`;
