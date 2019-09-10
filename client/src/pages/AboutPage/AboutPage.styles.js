import styled from "styled-components";

export const AboutWrap = styled.div`
  grid-column: 2 / 3;
  display: grid;
  grid-template-columns: repeat(2, minmax(20rem, 1fr));
  grid-template-rows: 1fr 1fr;
  background-color: #222;
  border-radius: 10px 10px 0 0;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
  margin-top: 5rem;
  @media (max-width: 800px) {
    grid-column: 1/-1;
    border-radius: 0;
    padding: 1rem;
    margin: 0;
  }

  .about-hightide {
    margin: 5rem;
    grid-column: 1 / -1;
    h1 {
      font-size: 4rem;
      font-family: Catamaran;
      display: flex;
      justify-content: center;
    }
  }
`;
