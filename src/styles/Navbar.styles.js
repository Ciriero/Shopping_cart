import styled from "styled-components";

export const NavContainer = styled.nav`
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 10;
  justify-content: center;
  background-color: var(--bg-color);
  transition: 0.5s all ease;
  box-shadow: var(--box-shadow);
`;

export const NavCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1100px;
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      width: 200px;
      height: 200px;
      object-fit: contain;
    }
    .nav-btn {
      background-color: transparent;
      border-color: transparent;
      color: red;
      font-size: 2rem;
      cursor: pointer;
      justify-self: end;
    }
  }
  .nav-links {
    display: none;
  }
  @media screen and (min-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .nav-btn {
      display: none;
    }
    .nav-links {
      display: flex;
      justify-content: center;

      li {
        margin: 0.05rem;
      }
      a {
        color: black;
        font-size: 1rem;
        font-weight: bold;
        text-transform: capitalize;
        letter-spacing: 0.1rem;
        padding: 0.5rem;
      }
    }
  }
`;
