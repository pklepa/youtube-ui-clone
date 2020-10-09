import styled from "styled-components";

// NAV - Navbar
// VA - Video Area
// SL - Sugestion List

export const Grid = styled.div`
  display: grid;

  grid-template-columns: auto minmax(426px, auto);
  grid-template-rows: 56px auto;

  grid-template-areas:
    "NAV NAV"
    "VA SL";

  min-height: 100%;

  background-color: var(--background-grey);

  @media (max-width: 1000px) {
    grid-template-columns: auto;
    grid-template-rows: 56px auto auto;

    grid-template-areas:
      "NAV"
      "VA"
      "SL";
  }
`;
