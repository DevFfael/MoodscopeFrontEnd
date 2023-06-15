import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import '../Styles/StyleView.css';
import WordCloud from './WordCloud';
import { useCallback } from 'react';

function VideoView({ video }) {
  const [infoVideo, setInfoVideo] = React.useState(null);
  const videoName = video.fileName.replace('.csv', '');

  const getInfoVideo = useCallback(async () => {
    const infoVideo = await fetch(`http://localhost:5000/analyse/${videoName}`);
    const infoVideoJSON = await infoVideo.json();
    setInfoVideo(infoVideoJSON);
  }, [videoName]);

  React.useEffect(() => {
    getInfoVideo();
  }, [getInfoVideo]);

  return (
    <Container sx={{ marginTop: '50px' }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box className="boxNotas">
            <div className="boxTotal">
              <p>Comentários</p>
              <span>{infoVideo && infoVideo.commentsTotal}</span>
            </div>
            <div className="boxPromotor">
              <p>Positivos</p>
              <span>{infoVideo && infoVideo.commentsPositive.percentual}</span>
            </div>
            <div className="boxNeutro">
              <p>Neutros</p>
              <span>{infoVideo && infoVideo.commentsNeutral.percentual}</span>
            </div>
            <div className="boxDetrator">
              <p>Negativos</p>
              <span>{infoVideo && infoVideo.commentsNegative.percentual}</span>
            </div>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <WordCloud videoName={videoName} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default VideoView;
