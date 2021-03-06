import styled from "styled-components";

export const Wrap = styled.div`
  grid-column: 2 / 3;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 30rem));
  max-width: 100vw;
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
`;
