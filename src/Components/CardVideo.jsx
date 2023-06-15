import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function CardVideo({ name, id, detratores, neutros, promotores, setIdVideos }) {
  function onSubmit() {
    setIdVideos();
  }

  React.useEffect(() => {
    console.log(id);
  }, [id]);

  return (
    <Card sx={{ margin: '20px 0' }}>
      <CardActionArea
        sx={{ display: 'flex', padding: '20px' }}
        onClick={onSubmit}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            alignItems: 'center',
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 200 }}
            image="https://picsum.photos/200"
            alt="Vídeo"
          />
          <CardContent>
            <Typography component="div" variant="h5">
              {name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              nome do canal do youtube
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: 'flex',
              minWidth: '200px',
              fontSize: 20,
              justifyContent: 'space-around',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ThumbUpIcon
                sx={{ fontSize: 25, marginRight: '7px', color: '#0dd106' }}
              />
              <span>{promotores}</span>
            </Box>
            <Box
              sx={{ display: 'flex', alignItems: 'center', color: '#5c5c5c' }}
            >
              <DoNotDisturbOnIcon sx={{ fontSize: 25, marginRight: '7px' }} />
              <span>{neutros}</span>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ThumbDownIcon
                sx={{ fontSize: 25, marginRight: '7px', color: '#e02626' }}
              />
              <span>{detratores}</span>
            </Box>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default CardVideo;
