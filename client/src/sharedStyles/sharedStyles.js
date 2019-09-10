import styled from "styled-components";

export const Wrap = styled.div`
  grid-column: 2 / 3;
  /* height: 100%; */
  background-color: #222;

  @media (max-width: 800px) {
    grid-column: 1/-1;
  }
`;
