import styled, { createGlobalStyle } from "styled-components";
import backdrop from "../assets/icons/backdrop.jpg";

import Catamaran from "../assets/fonts/Catamaran.ttf";
import Montserrat from "../assets/fonts/Montserrat.ttf";

export const theme = {
  backgroundColor: "rgb(10, 10, 10, 0.9);",
  textColor: "#fff",
  accentRed: "#FF5D73",
  lightGray: "#7C7A7A",
  darkGray: "#494949"
};
export const GridWrap = styled.div`
  display: grid;
  position: relative;
  height: 100%;
  /* width: 100vw; */
  font-size: 1.4rem;
  grid-template-columns: 10vw 6fr 10vw;
  grid-template-rows: 10vh 1fr 10vh;
  background-size: cover;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
  position: relative;
  @media (max-width: 730px) {
    grid-template-rows: 15vh;
    font-size: 1rem;
  }

  div::after {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    background-image: url(${backdrop});
    /* background-attachment: fixed; */
    content: "";
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -2;
    background-size: fill;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Catamaran;
    src: url(${Catamaran}) format('truetype');
    font-weight: 600;
    font-style: bold;
  }
  @font-face {
    font-family: Montserrat;
    src: url(${Montserrat}) format('truetype');
    font-weight: normal;
    font-style: normal;
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
    font-family: Catamaran;
  }

  ol, ul {
    list-style: none;

  }
  a {
    text-decoration: none;
    color: #fff;
  }
`;
