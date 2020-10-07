import React from "react";

import VideoCard from "../VideoCard";
import { Container } from "./styles";

function SuggestionList() {
  return (
    <Container>
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
    </Container>
  );
}

export default SuggestionList;
