import styled from "styled-components";
import { Like, Dislike } from "styled-icons/boxicons-solid";
import { ShareForward } from "styled-icons/remix-fill";
import { PlaylistAdd } from "styled-icons/material-outlined";
import { MoreHoriz } from "styled-icons/material";
import { FilterLeft } from "styled-icons/bootstrap";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  grid-area: VA;

  background-color: var(--background-grey);
  padding: 24px;
`;

export const VideoPlayer = styled.div`
  width: 900px;
  height: 550px;

  background-color: #e0e0e0;
`;

export const PrimaryVideoInfo = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  padding-top: 20px;

  h1 {
    font-size: 18px;
    font-weight: 400;
    color: black;
  }

  div {
    display: flex;
    justify-content: space-between;

    height: 40px;

    padding-bottom: 8px;
    border-bottom: 1px solid #e0e0e0;
  }
`;

export const VideoDetails = styled.div`
  display: flex;
  align-items: center;

  h2 {
    color: var(--grey);
    font-size: 14px;
    font-weight: 400;
  }
`;

export const ActionButtons = styled.div`
  display: flex;

  div {
    display: flex;
    align-items: center;

    margin-right: 16px;

    border: none;
  }

  span {
    color: var(--grey);
    font-size: 13px;
    font-weight: 500;
  }

  svg {
    width: 36px;
    height: 36px;

    padding: 8px;

    color: #909090;

    cursor: pointer;
  }
`;

export const LikeDislikeWrapper = styled.div`
  margin-right: 8px !important;

  padding-bottom: 0;
  border-bottom: 2px solid var(--grey) !important;
  border-image: linear-gradient(to right, #909090 92%, #c3c3c3 92%) 3 !important;
`;

export const LikeButton = styled.div`
  padding-bottom: 0 !important;
`;
export const LikeIcon = styled(Like)``;
export const DislikeButton = styled.div`
  margin-right: 8px !important;
  padding-bottom: 0 !important;
`;
export const DislikeIcon = styled(Dislike)``;
export const ShareButton = styled.div``;
export const ShareIcon = styled(ShareForward)``;
export const SaveButton = styled.div``;
export const SaveIcon = styled(PlaylistAdd)``;
export const MoreIcon = styled(MoreHoriz)`
  padding: 4px !important;
`;

export const SecondaryVideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 16px 0 12px;

  border-bottom: 1px solid #e0e0e0;
`;

export const UpperDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const ChannelHeader = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;

    h1 {
      color: black;
      font-size: 15px;
      font-weight: 500;
    }

    span {
      color: var(--grey);
      font-size: 13px;
      font-weight: 400;
      line-height: 1.5em;
    }
  }
`;

export const ChannelProfilePic = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 16px;

  background-image: url("https://yt3.ggpht.com/a/AATXAJySYp_OeeGRAbs_bzpkhsmCKF6qsGfb6yv_JissWQ=s48-c-k-c0xffffffff-no-rj-mo");
  background-size: cover;
`;

export const SubscribeButton = styled.button`
  background-color: red;
  color: var(--white);
  font-size: 16px;
  font-weight: 500;

  padding: 10px 16px;
  border-radius: 2px;

  cursor: pointer;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 800px;
  padding: 15px 0 10px 64px;

  p {
    color: black;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5em;
  }
`;

export const ShowMoreButton = styled.button`
  font-size: 13px;
  font-weight: 500;
  color: var(--grey);

  cursor: pointer;
  background: none;
  text-align: left;

  margin: 10px 0;
`;

export const CommentsHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 16px 0 12px;

  .comments-top-bar {
    display: flex;
    width: 100%;
    align-items: center;

    margin-bottom: 24px;

    h2 {
      color: black;
      font-size: 17px;
      font-weight: 400;
    }

    span {
      color: var(--grey);
      font-size: 15px;
      font-weight: 500;
    }
  }

  .comment {
    display: flex;
    align-items: center;

    width: 100%;
    margin-bottom: 32px;
  }
`;

export const FilterIcon = styled(FilterLeft)`
  color: var(--grey);
  height: 25px;
  width: 25px;

  margin: 0 8px 0 32px;
  cursor: pointer;
`;

export const ProfilePic = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 15px;

  /* background-image: url("https://lh3.googleusercontent.com/a-/AOh14GhF5DE1KPWGF1TZ06qXhf-TexiC2ZAfuHVnY_KKVA=s88-c-k-c0x00ffffff-no-rj-mo"); */
  background-image: url("${(props) =>
    props.img ||
    "https://lh3.googleusercontent.com/a-/AOh14GhF5DE1KPWGF1TZ06qXhf-TexiC2ZAfuHVnY_KKVA=s88-c-k-c0x00ffffff-no-rj-mo"}");
  background-size: cover;

  cursor: pointer;
`;

export const CommentInput = styled.input`
  width: 100%;

  background: none;
  border-bottom: 1px solid #e0e0e0;

  color: black;
  font-size: 15px;
  line-height: 1.5em;

  padding-bottom: 4px;
`;

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Comment = styled.div`
  display: flex;
  align-items: center;

  .comment-header {
    display: flex;
    align-items: center;
    line-height: 1.5em;

    h1 {
      color: black;
      font-size: 13px;
      font-weight: 500;
      margin-right: 8px;
    }

    span {
      color: var(--grey);
      font-weight: 400;
      font-size: 13px;
    }
  }

  p {
    color: black;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5em;
  }
`;

export const CommentReactionBar = styled.div`
  display: flex;
  align-items: center;
  margin: 6px 0 24px 54px;

  svg {
    height: 18px;
    width: 18px;
    color: #909090;
  }

  span {
    color: var(--grey);
    font-weight: 500;
    font-size: 13px;
    margin-left: 8px;
    margin-right: 12px;
  }
`;

export const FakeCommentsLoader = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 32px;
`;
