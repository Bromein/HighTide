import styled, { createGlobalStyle } from "styled-components";
import backdrop from "../assets/icons/backdrop.jpg";

import Catamaran from "../assets/fonts/Catamaran.ttf";
import Montserrat from "../assets/fonts/Montserrat.ttf";
import CinzelDecorative from "../assets/fonts/CinzelDecorative.ttf";
import Amiri from "../assets/fonts/Amiri.ttf";
import PermanentMarker from "../assets/fonts/PermanentMarker.ttf";

export const theme = {
  backgroundColor: "#FDFFFC;",
  textColor: "#000",
  accentRed: "#E71D36",
  accentBlue: "#2EC4B6",
  accentBlueFaded: "rgba(46, 196, 182, 0.1)",
  accentOrange: "#FF9F1C",
  lightGray: "#7C7A7A",
  darkGray: "#494949"
};
export const Container = styled.main`
  position: relative;
  height: 100%;
  width: 100%;
  font-size: 1.4rem;
  background-size: cover;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
  display: grid;
  grid-template-columns: 10rem 6fr 10rem;
  grid-template-rows: 10vh 1fr 10vh;
  background: ${props => props.theme.backgroundColor};

  @media (max-width: 730px) {
    font-size: 1rem;
    grid-template-rows: 15vh 1fr 5vh;
  }
  @media (max-width: 800px) {
    grid-template-columns: 10rem 1fr 10rem;
  }

  /* div::after {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    background-image: url(${backdrop});
    content: "";
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -2;
    background-size: fill;
  } */
`;

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Catamaran;
    src: url(${Catamaran}) format('truetype');
    font-weight: 600;
    font-style: bold;
  }
  @font-face {
    font-family: PermanentMarker;
    src: url(${PermanentMarker}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: CinzelDecorative;
    src: url(${CinzelDecorative}) format('truetype');
    font-weight: 600;
    font-style: bold;
  }
  @font-face {
    font-family: Montserrat;
    src: url(${Montserrat}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: Amiri;
    src: url(${Amiri}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

    * {
    ::-webkit-scrollbar {
    width: 0.2rem;
    border-radius: 100px;
    background-color: ${props => props.theme.darkestGray};

    &-thumb {
      background-color: ${props => props.theme.accentRed};
    }
  }
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
    font-family: Montserrat;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.5;


  }

  h1, h2, h3, h4, h5, h6 {
    font-family: CinzelDecorative;
  }

  ol, ul {
    list-style: none;

  }
  a {
    text-decoration: none;
    color: #000;
  }
`;
