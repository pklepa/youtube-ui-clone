import React, { useState } from "react";

import loadingImg from "../../assets/images/loading.svg";

import VideoCard from "../VideoCard";
import {
  Container,
  AutoplayWrapper,
  AutoplaySwitch,
  Separator,
  FakeLoader,
} from "./styles";

function SuggestionList() {
  const [autoPlay, setAutoPlay] = useState(false);

  return (
    <Container>
      <AutoplayWrapper>
        <h1>Up next</h1>

        <div onClick={() => setAutoPlay(!autoPlay)}>
          <span>AUTOPLAY</span>
          <AutoplaySwitch autoPlay={autoPlay} />
        </div>
      </AutoplayWrapper>

      <VideoCard
        thumb="http://i3.ytimg.com/vi/kTXTPe3wahc/maxresdefault.jpg"
        videoName="Parallel Worlds Probably Exist. Here's Why"
        channelName="Veritasium"
        isVerified
        viewCount="6 millions views"
        date="2 days ago"
        isNew
        duration="19:59"
      />

      <Separator />

      <VideoCard
        thumb="http://i3.ytimg.com/vi/kTXTPe3wahc/maxresdefault.jpg"
        videoName="Parallel Worlds Probably Exist. Here's Why"
        channelName="Veritasium"
        isVerified
        viewCount="6 millions views"
        date="2 days ago"
        isNew
        duration="19:59"
      />
      <VideoCard
        thumb="http://i3.ytimg.com/vi/kTXTPe3wahc/maxresdefault.jpg"
        videoName="Parallel Worlds Probably Exist. Here's Why"
        channelName="Veritasium"
        isVerified
        viewCount="6 millions views"
        date="2 days ago"
        isNew
        duration="19:59"
      />

      <FakeLoader>
        <img src={loadingImg} alt="Loading..." />
      </FakeLoader>
    </Container>
  );
}

export default SuggestionList;
