import styled from "styled-components";

export const Nav = styled.nav`
  grid-column: 1 / -1;
  max-width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #333;

  img {
    padding: 2rem;
    width: 20rem;
    @media (max-width: 730px) {
      width: 15rem;
      justify-self: center;
      align-self: center;
    }
  }

  ul {
    display: flex;
    /* width: 25%; */
    justify-content: space-between;

    li {
      font-size: 2rem;
      margin: 0.1rem;
      transition: all 0.2s ease-in-out;
      @media (max-width: 730px) {
        padding: 0;
      }
      &:hover {
        background-color: ${props => props.theme.accentRed};
        border-radius: 4px;
      }

      a {
        transition: all 0.2s ease-in-out;
        padding: 1rem;
        &:hover {
        }
      }
    }
  }
  @media (max-width: 730px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;
