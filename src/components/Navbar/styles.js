import styled from "styled-components";
import { Apps, Menu, Notifications, VideoCall } from "styled-icons/material";
import { StyledIconBase } from "@styled-icons/styled-icon";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0px 16px;

  grid-area: NAV;

  background-color: var(--white);
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    width: 40px;
    height: 40px;

    padding: 8px;
    margin-right: 8px;

    color: var(--grey);

    cursor: pointer;
  }
`;

export const MenuIcon = styled(Menu)``;

export const Logo = styled.div`
  width: 80px;
  height: 30px;

  background-color: crimson;
`;

export const SearchBar = styled.div`
  width: 640px;
  height: 30px;

  border: 1px solid var(--light-grey);
  border-radius: 2px;
`;

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddVideoIcon = styled(VideoCall)``;

export const AppsIcon = styled(Apps)``;

export const BellIcon = styled(Notifications)``;

export const ProfilePic = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 0 15px 0 8px;

  background-image: url("https://lh3.googleusercontent.com/a-/AOh14GhF5DE1KPWGF1TZ06qXhf-TexiC2ZAfuHVnY_KKVA=s88-c-k-c0x00ffffff-no-rj-mo");
  background-size: cover;

  cursor: pointer;
`;