import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");

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
  height: 100%;
}

:root {
  --white: #fff;
  --background-grey: #c3c3c3;
  --grey: #606060;
}
`;

export default GlobalStyles;
