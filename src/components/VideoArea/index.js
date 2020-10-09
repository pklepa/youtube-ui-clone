import React, { useState } from "react";

import {
  Container,
  VideoPlayer,
  PrimaryVideoInfo,
  SecondaryVideoInfo,
  CommentsHeader,
  Comments,
  FakeCommentsLoader,
  VideoDetails,
  ActionButtons,
  LikeDislikeWrapper,
  LikeButton,
  LikeIcon,
  DislikeButton,
  DislikeIcon,
  ShareButton,
  ShareIcon,
  SaveButton,
  SaveIcon,
  MoreIcon,
  UpperDiv,
  ChannelHeader,
  ChannelProfilePic,
  SubscribeButton,
  Description,
  ShowMoreButton,
} from "./styles";

function VideoArea() {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <Container>
      <VideoPlayer />

      <PrimaryVideoInfo>
        <h1>
          Aminoácido .:: Shirik Tanai + More Trouble Everyday | Sonda
          Experimental #42a
        </h1>

        <div>
          <VideoDetails>
            <h2>4.738 views &bull; 27 Jul 2018</h2>
          </VideoDetails>

          <ActionButtons>
            <LikeDislikeWrapper>
              <LikeButton>
                <LikeIcon />
                <span>187</span>
              </LikeButton>

              <DislikeButton>
                <DislikeIcon />
                <span>2</span>
              </DislikeButton>
            </LikeDislikeWrapper>

            <ShareButton>
              <ShareIcon />
              <span>SHARE</span>
            </ShareButton>

            <SaveButton>
              <SaveIcon />
              <span>SAVE</span>
            </SaveButton>

            <MoreIcon />
          </ActionButtons>
        </div>
      </PrimaryVideoInfo>

      {/* ---------------------------------------------- */}

      <SecondaryVideoInfo>
        <UpperDiv>
          <ChannelHeader>
            <ChannelProfilePic />

            <div>
              <h1>Aminoácido</h1>
              <span>644 subscribers</span>
            </div>
          </ChannelHeader>

          <SubscribeButton>SUBSCRIBE</SubscribeButton>
        </UpperDiv>

        <Description>
          <p>
            Official Facebook: facebook/aminovcido <br />
            Follow us on Instagram: @aminovcido <br />
            Spotify: Aminoácido. Listen to us! <br />
          </p>

          {showFullDescription && (
            <p>
              {"  "} <br />
              ------------------------------------ <br />
              NOME DA CÁPSULA EXPERIMENTAL: <br />
              Shirik Tanai NÚMERO DE SÉRIE DA CÁPSULA: 42a <br />
              DESCRIÇÃO: Parte da exploração de campo feita no laboratório ÁUDIO
              13 <br />
              ATIVIDADE REALIZADA: Levantamento de dados e sintetização de
              proteínas <br />
              OBJETIVO FINAL: Mantido em sigilo pelas autoridades. <br />
              {"  "} <br />
              Att, <br />
              TAKIO GROOVE <br />
              Responsável Administrativo/Groovernador Intergaláctico <br />
              2018.
              <br />
              ---------------------------------------------------------------{" "}
              <br />
              Equipe auxiliadora da pesquisa de campo: Master/Mix: Galego
              Teixeira (Áudio 13) <br />
              Câmera: Lucas Klepa
            </p>
          )}

          <ShowMoreButton
            onClick={() => setShowFullDescription(!showFullDescription)}
          >
            SHOW {showFullDescription ? "LESS" : "MORE"}
          </ShowMoreButton>
        </Description>
      </SecondaryVideoInfo>

      <CommentsHeader />
      <Comments />

      <FakeCommentsLoader />
    </Container>
  );
}

export default VideoArea;
