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
      color: var(--clr-red2);
      font-size: 2rem;
      cursor: pointer;
      justify-self: end;
    }
  }
  .nav-links {
    display: none;
  }

  .shop {
    display: none;
  }
  @media screen and (min-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .nav-btn {
      display: none;
    }
    .shop {
      cursor: pointer;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: transparent;
      border: transparent;
      margin-top: 1rem;
      svg {
        font-size: 2rem;
      }
      .numero {
        position: absolute;
        width: 2rem;
        height: 2rem;
        font-size: 1rem;
        line-height: 2rem;
        text-align: center;
        bottom: 1.3rem;
        left: 1.2rem;
        background-color:var(--var-bg);
        color: black;
        border-radius: 50%;
      }
    }
    .nav-links {
      display: flex;
      justify-content: center;

      li {
        margin: 0.05rem;
      }
      a {
        color: black;
        font-size: 1.3rem;
        font-weight: bold;
        text-transform: capitalize;
        letter-spacing: 0.1rem;
        padding: 0.5rem;
      }
    }
  }
`;
