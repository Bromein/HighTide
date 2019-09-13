import styled from "styled-components";
import { Container } from "../../theme/theme";

export const AboutWrap = styled.div`
  grid-column: 1 / -1;

  display: grid;
  grid-template-columns: 400px repeat(2, 1fr) 400px;
  margin: 5rem 0;
  justify-items: center;

  @media (max-width: 800px) {
    grid-column: 1 / -1;
    display: flex;
    flex: 1;
    flex-direction: column;
    border-radius: 0;
    padding: 1rem;
    margin: 0;
    grid-template-columns: 5rem 1fr 1fr 5rem;
  }
`;

export const About = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 50vh;
  /* background: rgba(50, 50, 50, 0.1); */
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
  justify-self: center;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
`;
