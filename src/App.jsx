import React from 'react';
import './Styles/App.css';
import Header from './Components/Header';
import SelectVideo from './Components/SelectVideo';
import VideoView from './Components/VideoView';

function App() {
  const [idVideo, setIdVideo] = React.useState(null);
  const [videos, setVideos] = React.useState([]);

  async function getVideosName() {
    const namesVideos = fetch('http://localhost:5000/files');
    const videosJSON = await (await namesVideos).json();

    setVideos(videosJSON);
  }

  React.useEffect(() => {
    getVideosName();
  }, []);

  return (
    <>
      <Header />
      <SelectVideo videos={videos} setIdVideo={setIdVideo} />
      {idVideo !== null && <VideoView video={videos[idVideo]} />}
    </>
  );
}

export default App;
