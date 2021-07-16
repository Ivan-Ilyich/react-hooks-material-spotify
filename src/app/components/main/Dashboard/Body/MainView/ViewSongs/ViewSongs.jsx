import React from 'react';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const ViewSongs = () => (
  <div className="view__songs__container">
    <div className="view__songs__icon">
      <PlayCircleFilledIcon className="viw__songs__shuffle" />
      <FavoriteIcon fontSize="large" />
      <MoreHorizIcon />
    </div>

    {/* <SongRow /> */}
  </div>
);

export default ViewSongs;
