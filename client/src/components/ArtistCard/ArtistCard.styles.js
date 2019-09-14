import styled from "styled-components";

export const TattoArtistCard = styled.div`
  justify-self: center;
  margin: 5rem;
  padding: 2rem;
  grid-column: span 1;
  position: relative;
  background: ${props => props.theme.accentBlueFaded};
  border-radius: 0.4rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 0.5fr 0.5fr 1fr;
  align-items: center;
  text-align: center;
  box-shadow: 0 0.5px 0 0 #ffffff inset, 0 1px 2px 0 #b3b3b3;
  opacity: .2;
  transition: all 0.2s ease;
  &:hover {
    opacity: 1;
  }

  @media (max-width: 730px) {
    opacity: 1;
  }

  .connect-section {
    display: flex;
    /* background: ${props => props.theme.accentBlue}; */
    font-family: Catamaran;
    align-self: center;
    justify-content: center;
    align-items: center;
    a {
      transition: color .2s ease;
      &:hover {
        color: ${props => props.theme.accentBlue}
      }
    }

    .icon {
      margin-right: 0.5rem;
      justify-self: flex-start;
    }
  }
  @media (max-width: 774px) {
    margin: 5rem 1rem;
  }

  @media (max-width: 1200) {
    grid-column: 1 / -1;
  }

  section {
    margin: 1rem;
    .name {
      font-size: 2rem;
    }
  }

  img {
    grid-column: 1 / -1;
    grid-row: 1;
    justify-self: center;
    width: 15rem;
    border: 0.2rem solid white;
    margin-top: 1rem;
    height: 15rem;
    border-radius: 100%;
    /* border: 2px solid white; */
    animation: float 2s infinite;
  }

  @keyframes float {
    0% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translateY(0px);
    }
    50% {
      box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
      transform: translateY(-10px);
    }
    100% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translateY(0px);
    }
  }

  .booking-options {
    font-family: Catamaran;
    position: absolute;
    top: -2rem;
    padding: 1rem;
    background: ${props => props.theme.accentOrange};
    border-radius: 4px;
    right: 3rem;
    transition: all 0.2s ease-in-out;

    @media (max-width: 450px) {
      top: -2rem;
      padding: 0;
    }

    &:hover {
      transform: scale(1.1);
    }
    span {
      cursor: pointer;
      padding: 1rem;
    }
  }
`;

// Neil Powers
// https://www.instagram.com/nerdneil/
// @nerdneil

// Chris Russel

// Cory Connell
// https://www.instagram.com/coryconnellart/
// @coryconnellart

// Fallon
// https://www.instagram.com/foxtattooer/
// @foxtattoer
