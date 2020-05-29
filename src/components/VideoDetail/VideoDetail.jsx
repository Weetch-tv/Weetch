import React from 'react';
import {
  VideoContainer,
  Frame,
  VideoWrapper,
  VideoTitle,
  VideoChannel,
  Divider,
  VideoDescription
} from './videoDetailStyles';

//Hecho con ayuda de styled-components

//Detalles del video (titulo, canal, descripción, etc)
function VideoDetail({ videos, children }) {
  if (!videos) return null;

  const { videoId } = videos.id,
    { title, channelTitle, description } = videos.snippet,
    url = `https://youtube.com/embed/${videoId}`;

  return (
    <VideoContainer>
      <VideoWrapper>
        <Frame src={url} title={title} />
        <VideoTitle>{title}</VideoTitle>
        <VideoChannel>{channelTitle}</VideoChannel>
        <Divider />
        <VideoDescription>{description}</VideoDescription>
      </VideoWrapper>
      {children}
    </VideoContainer>
  );
}

export default React.memo(VideoDetail);
