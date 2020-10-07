import React from "react";

import {
  Container,
  MenuWrapper,
  IconStyleWrapper,
  MenuIcon,
  Logo,
  SearchBar,
  IconsWrapper,
  AddVideoIcon,
  AppsIcon,
  BellIcon,
  ProfilePic,
} from "./styles";

function Navbar() {
  return (
    <Container>
      <MenuWrapper>
        <IconStyleWrapper>
          <MenuIcon />
        </IconStyleWrapper>
        <Logo />
      </MenuWrapper>

      <SearchBar />

      <IconsWrapper>
        <IconStyleWrapper>
          <AddVideoIcon />
          <AppsIcon />
          <BellIcon />
        </IconStyleWrapper>
        <ProfilePic />
      </IconsWrapper>
    </Container>
  );
}

export default Navbar;
