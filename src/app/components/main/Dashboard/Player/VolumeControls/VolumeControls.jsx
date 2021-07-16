import React from 'react';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

const VolumeControls = () => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <PlaylistPlayIcon />
      </Grid>
      <Grid item>
        <VolumeDownIcon />
      </Grid>
      <Grid item xs>
        <Slider aria-labelledby="continuous-slider" />
      </Grid>
    </Grid>
  );
};

export default VolumeControls;
