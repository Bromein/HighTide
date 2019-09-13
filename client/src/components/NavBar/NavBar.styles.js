import styled from "styled-components";

export const Nav = styled.div`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: all 0.2s ease;
  /* background: rgba(0, 0, 0, 0.5); */
  @media (max-width: 730px) {
    flex-direction: column;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  }
  ul {
    display: flex;

    li {
      padding: 0 1rem;
      @media (max-width: 730px) {
        /* padding: 0.5rem; */
      }
      a {
        transition: all 0.2s ease-in-out;
        color: ${props => props.theme.textColor};
        margin-bottom: 0.2rem;
        position: relative;
        &:after {
          content: "";
          border-bottom: 1px solid ${props => props.theme.accentBlue};
          width: 0;
          position: absolute;
          left: 0;
          bottom: 0;
          transition: all 0.5s ease;
        }
        &:hover:after {
          width: 100%;
        }

        &:hover {
          width: 100%;
        }
      }
    }
  }

  .logo {
    width: 10rem;
    @media (max-width: 730px) {
      width: 7rem;
    }
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  & > *:first-child {
    margin-right: 1rem;
  }

  @media (max-width: 730px) {
  }
`;
