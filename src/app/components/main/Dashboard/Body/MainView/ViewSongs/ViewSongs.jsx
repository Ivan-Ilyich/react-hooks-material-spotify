import React from 'react';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow/SongRow';

const ViewSongs = () => (
  <div className="view__songs__container">
    <div className="view__songs__icon">
      <PlayCircleFilledIcon className="view__songs__shuffle" />
      <FavoriteIcon fontSize="large" />
      <MoreHorizIcon />
    </div>

    <SongRow />
  </div>
);

export default ViewSongs;
