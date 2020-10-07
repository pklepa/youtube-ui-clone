import styled from "styled-components";

// NAV - Navbar
// VA - Video Area
// SL - Sugestion List

export const Grid = styled.div`
  display: grid;

  grid-template-columns: auto 426px;
  grid-template-rows: 56px auto;

  grid-template-areas:
    "NAV NAV"
    "VA SL";

  min-height: 100%;

  @media (max-width: 1000px) {
    grid-template-columns: auto;
    grid-template-rows: 56px auto auto;

    grid-template-areas:
      "NAV"
      "VA"
      "SL";
  }
`;
