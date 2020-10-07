import React from "react";

import { Container, Thumbnail, VideoInfo } from "./styles";

function VideoCard(props) {
  const {
    thumb,
    videoName,
    channelName,
    viewCount,
    date,
    isNew,
    duration,
  } = props;

  return (
    <Container duration={duration}>
      <Thumbnail src={thumb} alt="" />

      <VideoInfo>
        <h1>{videoName}</h1>
        <h2>{channelName}</h2>
        <p>
          {viewCount} <strong>&bull;</strong> {date}
        </p>
        {isNew && (
          <div>
            <span>New</span>
          </div>
        )}
      </VideoInfo>
    </Container>
  );
}

export default VideoCard;
