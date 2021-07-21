import React from 'react';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

const VolumeControls = ({ volumeSetting }) => {
  return (
    <Grid item xs={2} container spacing={2} alignItems="center">
      <Grid item>
        <PlaylistPlayIcon />
      </Grid>
      <Grid item>
        <VolumeDownIcon />
      </Grid>
      <Grid item xs>
        <Slider
          aria-labelledby="continuous-slider"
          man="0"
          max="100"
          defaultValue="30"
          onChange={(e, v) => volumeSetting(v)}
        />
      </Grid>
    </Grid>
  );
};

export default VolumeControls;
