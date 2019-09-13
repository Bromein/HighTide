import styled from "styled-components";
import hero from "../../assets/icons/hero.jpeg";

export const HomeWrap = styled.div`
  grid-column: 1 / -1;
  display: grid;
  height: 100vh;
  grid-template-columns: 10rem repeat(2, minmax(20rem, 1fr)) 10rem;
  /* margin: 5rem 0; */
  /* justify-items: center; */
  /* background: rgba(50, 50, 50, 0.1); */
  /* background: rgba(0, 0, 0, 0.1); */

  @media (max-width: 800px) {
    flex: 1;
    display: flex;
    flex-direction: column;
    border-radius: 0;
    padding: 1rem;
    margin: 0;
    grid-template-columns: 5rem 1fr 1fr 5rem;
  }
`;

export const RecentWork = styled.section`
  grid-column: 2 / 4;
  width: 100%;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Hero = styled.section`
  user-select: none;
  position: relative;
  grid-column: 1 / -1;
  /* width: 100%; */
  /* height: 100%; */
  height: 50vh;
  display: grid;
  grid-template-columns: repeat(3, minmax(20rem, 1fr));
  grid-template-rows: 1fr 1fr;
  z-index: 3;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }

  &::after {
    /* width: 100%; */
    /* height: 100%; */
    overflow-x: hidden;
    background-image: url(${hero});
    content: " ";
    display: inline-block;
    position: absolute;
    background-size: cover;
    max-width: 100%;
    max-height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -3;
  }

  .title {
    grid-row: 1 / -1;
    position: relative;
    font-family: Catamaran;
    font-size: 3rem;
    grid-column: 2 / 3;
    justify-self: center;
    align-self: center;
    /* text-align: center; */
    color: white;
    /* background: red; */

    span {
      font-family: PermanentMarker;
      font-size: 7rem;
    }
  }
`;
