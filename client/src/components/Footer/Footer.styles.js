import styled from "styled-components";

export const StyledFooter = styled.footer`
  grid-row: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 1 / -1;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background: ${props => props.theme.accentBlueFaded};
`;
