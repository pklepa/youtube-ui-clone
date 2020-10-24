import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: SL;

  width: 426px;
  min-height: 1040px;

  background-color: var(--background-grey);
  padding: 24px 24px 0 0;
`;

export const AutoplayWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-bottom: 16px;

  h1 {
    color: black;
    font-size: 16px;
    font-weight: 400;
  }

  div {
    display: flex;
    align-items: center;

    span {
      color: var(--grey);
      font-size: 13px;
      font-weight: 500;
    }
  }
`;

export const AutoplaySwitch = styled.div`
  position: relative;

  width: 36px;
  height: 14px;
  margin-left: 16px;

  background-color: #e0e0e0;
  border-radius: 8px;

  &::before {
    content: "";

    position: absolute;
    left: 0px;
    top: -3px;
    transform: ${(props) =>
      props.autoPlay ? "translateX(16px)" : "translateX(0px)"};

    width: 20px;
    height: 20px;

    background-color: ${(props) => (props.autoPlay ? "#065fd4" : "#909090")};
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.6);
    border-radius: 50%;

    transition: transform linear 0.08s, background-color linear 0.08s;
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;

  margin: 8px 0 16px;
`;

export const FakeLoader = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 16px;

  width: 100%;
  height: 32px;
`;
