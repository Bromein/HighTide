import styled from "styled-components";

export const ArtWrap = styled.div`
  grid-column: 1 / -1;
  display: grid;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;
  background: ${props => props.theme.accentBlueFaded};
  grid-template-columns: 10rem 1fr 10rem;
`;

export const Images = styled.div`
  /* margin-top: 25vh; */
  grid-column: 2 / 3;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-template-rows: 25vh 1fr;

  @media (max-width: 500px) {
    grid-column: 1 / -1;
    grid-template-columns: repeat(2, 1fr);
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

export const Filters = styled.ul`
  width: 100%;
  grid-column: 1 / -1;
  display: flex;
  justify-content: flex-end;

  li {
    font-family: PermanentMarker;
    margin: 2rem;
    font-size: 3rem;
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover {
      color: ${props => props.theme.accentBlue};
      text-decoration: line-through;
    }
  }
`;
