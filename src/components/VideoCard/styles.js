import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;

  width: 100%;
  height: 94px;

  margin-bottom: 8px;

  &::before {
    position: absolute;
    bottom: 5px;
    left: 125px;
    padding: 1px 2px;

    content: "${(props) => props.duration}";
    background-color: rgba(0, 0, 0, 0.7);

    color: white;
    font-size: 13px;
    font-weight: 700;
  }
`;

export const Thumbnail = styled.img`
  height: 100%;

  background-color: var(--grey);
  margin-right: 8px;
`;

export const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  h1 {
    color: black;
    font-size: 14px;
    font-weight: 500;

    margin-bottom: 4px;
  }

  h2,
  p {
    font-size: 13px;
    font-weight: 400;
    color: var(--grey);

    line-height: 1.3em;
  }

  span {
    font-size: 13px;
    font-weight: 500;
    color: var(--grey);

    padding: 1px 3px;
    background-color: #e3e3e3;
  }
`;
