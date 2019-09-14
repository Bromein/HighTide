import styled from "styled-components";

export const ArtWrap = styled.div`
  grid-column: 1 / -1;
  display: grid;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.accentBlueFaded};
  grid-template-columns: 10rem 1fr 10rem;
`;

export const Images = styled.div`
  margin-top: 25vh;
  grid-column: 2 / 3;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));

  @media (max-width: 500px) {
    grid-column: 1 / -1;
    grid-template-columns: repeat(2, 1fr);

    .contain {
    }
  }

  .contain {
    position: relative;
    width: 100%;
    transition: all 0.2s ease-in;
    opacity: 0.75;
    &:hover {
      transform: scale(1.25);
      padding: 1rem;
      opacity: 1;
    }
    img {
      max-width: 100%;
      border-radius: 4px;

      @media (hover: none) {
        opacity: 1;
      }
    }
  }
`;
