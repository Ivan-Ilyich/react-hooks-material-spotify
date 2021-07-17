import React from 'react';
import { uuid } from 'uuidv4';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow/SongRow';
import { useDataLayer } from '../../../../../../context/store';

const ViewSongs = () => {
  const [{ selectedPlaylistsTracks }] = useDataLayer();

  return (
    <div className="view__songs__container">
      <div className="view__songs__icon">
        <PlayCircleFilledIcon className="view__songs__shuffle" />
        <FavoriteIcon fontSize="large" />
        <MoreHorizIcon />
      </div>
      {selectedPlaylistsTracks &&
        selectedPlaylistsTracks.map((tr) => {
          return (
            <SongRow
              key={uuid()}
              name={tr?.track?.name}
              album={tr?.track?.album?.name}
              artist={tr?.track?.artists?.[0].name}
              imageUrl={tr?.track?.album?.images?.[1].url}
            />
          );
        })}
    </div>
  );
};

export default ViewSongs;
