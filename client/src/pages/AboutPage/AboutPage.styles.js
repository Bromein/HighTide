import styled from "styled-components";
// import { Container } from "../../theme/theme";

export const AboutWrap = styled.div`
  grid-column: 1 / -1;

  display: grid;
  grid-template-columns: 400px repeat(2, 1fr) 400px;
  margin: 5rem 0;
  justify-items: center;
  transition: opacity 1500ms ease;
  animation: fadeIn 2s ease-in;
  @media (max-width: 800px) {
    grid-column: 1 / -1;
    display: flex;
    flex: 1;
    flex-direction: column;
    border-radius: 0;
    padding: 0rem;
    margin: 0;
    grid-template-columns: 5rem 1fr 1fr 5rem;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const About = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 50vh;
  background: ${props => props.theme.accentBlueFaded};
  color: #2a2a2a;
  justify-content: center;

  div {
    max-width: 50rem;
    text-align: center;
    h1 {
      font-size: 4rem;
      font-family: Amiri;
      text-transform: uppercase;
      display: flex;
      justify-content: center;
    }
    p {
      .anchor {
        margin-top: 10rem;
        align-self: center;
        justify-self: center;
        fill: black;
        height: 20rem;
        margin-bottom: 20rem;

        @media (max-width: 800px) {
          height: 20rem;
        }
      }
    }
  }
`;

export const Artists = styled.section`
  width: 100%;
  grid-column: 1 / -1;
  background: white;
  display: grid;
  /* opacity: 0; */
  transition: opacity 1500ms ease;
  animation: fadeIn 2s ease-in;
  /* animation-delay: 4s; */
  justify-self: center;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
`;
