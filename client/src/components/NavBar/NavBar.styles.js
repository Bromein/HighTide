import styled from "styled-components";

export const Nav = styled.nav`
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* background: ${props => props.theme.lightGray}; */

  img {
    width: 200px;

  }

  ul {
    display: flex;
    justify-content: space-around;
    /* background: ${props => props.theme.accentRed}; */
    li {
      font-size: 2rem;
      padding: 1rem;
      transition: all .2s ease-in-out;
      &:hover {
        transform: scale(1.15);
      }


      a {
        transition: all .2s ease-in-out;

        &:hover {
          color: ${props => props.theme.accentRed};
          /* background: red; */
          /* transform: scale(1.25); */
        }
      }
    }
  }



`;
