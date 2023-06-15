import React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectVideo({ videos, setIdVideo }) {
  const [videoSelec, setVideoSelec] = React.useState();

  function handleChange({ target }) {
    console.log(target.value);
    setVideoSelec(videos[target.value].videoTittle);
    console.log(videos[target.value].videoTittle, 'teste');
    setIdVideo(target.value);
  }

  return (
    <div>
      <FormControl sx={{ m: 5, width: 600 }}>
        <InputLabel>Vídeos do youtube</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={videoSelec}
          onChange={handleChange}
          input={<OutlinedInput label="Vídeos do youtube" />}
        >
          {videos.map((it, index) => (
            <MenuItem key={index} value={index}>
              {it.videoTittle}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
