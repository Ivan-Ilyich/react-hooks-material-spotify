import React from 'react';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';

const PlayerControls = () => (
  <div>
    <ShuffleIcon />
    <SkipPreviousIcon />
    <PlayCircleOutlineIcon />
    <SkipNextIcon />
    <RepeatIcon />
  </div>
);
export default PlayerControls;
