import styled from "styled-components";

export const TattoArtistCard = styled.div`
  display: grid;
  grid-template-rows: 0.5fr 1fr 0.1fr;
  grid-template-columns: 15rem 1fr 15rem;
  grid-column-gap: 2rem;
  margin: 5rem;
  align-items: center;
  /* justify-content: center; */
  background: #333;
  border-radius: 4px;
  padding: 1rem;
  position: relative;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  section {
    grid-column: 2;
    grid-row: 1;
    .name {
      font-family: Catamaran;
      font-size: 3rem;
    }
    .phone {
    }
  }

  .phone {
    grid-row: 1;
  }

  img {
    max-width: 15rem;
    border-radius: 0.4rem;
    grid-column: 1 / 2;
    grid-row: 1 / -1;
  }

  .about {
    grid-row: 2;
  }

  .booking-options {
    position: absolute;
    top: -2rem;
    padding: 1rem;
    background: ${props => props.theme.accentRed};
    border-radius: 4px;
    right: 3rem;
    transition: all 0.2s ease-in-out;

    @media (max-width: 450px) {
      top: -2rem;
      padding: 0;
    }

    &:hover {
      transform: scale(1.2);
    }
    span {
      cursor: pointer;
      padding: 1rem;
    }
  }
`;
