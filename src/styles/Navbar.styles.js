import styled from "styled-components";

export const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-color);
  box-shadow: var(--box-shadow);
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
    .nav-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .logo {
        width: 200px;
        height: 200px;
        object-fit: contain;
        .nav-toggle {
          background: transparent;
          border: transparent;
          color: red;
          cursor: pointer;
          .nav-links {
            display: none;
            .shop {
              display: none;
            }
          }
        }
      }
    }
  }
`;
