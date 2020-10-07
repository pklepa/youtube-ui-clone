import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*, button, input {
  border: 0;
  outline: 0;

  font-family: 'Roboto', sans-serif;
}

html, body, #root {
  min-height: 100%;
}

:root {
  --white: #fff;
  --background-grey: #f3f3f3;
  --light-grey: #c3c3c3;
  --grey: #606060;
}
`;

export default GlobalStyles;
