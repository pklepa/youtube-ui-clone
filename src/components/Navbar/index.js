import React from "react";

import Logo from "../../assets/images/yt-logo.png";

import SearchBar from "../SearchBar";

import {
  Container,
  MenuWrapper,
  IconStyleWrapper,
  MenuIcon,
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
        <img height="44" src={Logo} alt="Logo" srcset="" />
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
