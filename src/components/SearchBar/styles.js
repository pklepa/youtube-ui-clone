import styled from "styled-components";
import { Search } from "styled-icons/material";
import Keyboard from "../../assets/images/keyboard.svg";

export const Container = styled.div`
  position: relative;

  width: 640px;
  height: 30px;

  display: grid;
  grid-template-columns: auto 65px;
  justify-items: space-between;
  align-items: center;

  &::after {
    position: absolute;
    right: 81px;
    top: 3px;

    width: 24px;
    height: 24px;

    background-image: url("${Keyboard}");
    background-repeat: no-repeat;
    background-size: cover;
    content: "";
  }
`;

export const Input = styled.input`
  padding-left: 8px;
  padding-right: 55px;
  height: 100%;
  width: 100%;

  color: black;
  font-size: 16px;

  border: 1px solid var(--light-grey);
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;

  &:focus {
    border: 1px solid blue;
    border-radius: 2px;
  }
`;

export const SearchIcon = styled(Search)`
  width: 65px;
  height: 30px;

  padding: 4px 6px;

  color: var(--grey);
  background-color: #f3f3f3;

  border: 1px solid var(--light-grey);
  border-left: none;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;

  cursor: pointer;
`;
