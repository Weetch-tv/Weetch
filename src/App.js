import React, { useState, useEffect } from 'react';
import YTSearch from 'youtube-api-search';

// Componentes
import SearchBar from './components/SearchBar/SearchBar';
import VideoList from './components/VideoList/VideoList';
import VideoDetail from './components/VideoDetail/VideoDetail';
import Nav from './components/Nav/Nav';

// Estilos
import { Container } from './appStyles.js';

// Key del API de Youtube, se tiene que crear una en los servicios de API de Google
import API_KEY from './key';

function App() {
  const [videos, setVideos] = useState(null),
    [selectedVideo, setSelectVideo] = useState();

  const handleSearch = term =>
    YTSearch({ key: API_KEY, term }, videos => {
      setVideos(videos);
      setSelectVideo(videos[0]);
    });

  useEffect(() => {
    handleSearch('Guns and roses');
  }, []);

  return (
    <Container>
      <Nav>
        <SearchBar handleSearch={handleSearch} />
      </Nav>
      <VideoDetail videos={selectedVideo}>
        <VideoList
          videos={videos}
          handleSelectVideo={selectedVideo => setSelectVideo(selectedVideo)}
        />
      </VideoDetail>
    </Container>
  );
}

export default App;
