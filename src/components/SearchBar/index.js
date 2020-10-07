import React from "react";

import { Container, Input, SearchIcon } from "./styles";

function SearchBar() {
  return (
    <Container>
      <Input placeholder="Search" />

      <SearchIcon />
    </Container>
  );
}

export default SearchBar;
