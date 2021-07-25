/* eslint-disable no-unused-expressions */
import React from 'react';
import { uuid } from 'uuidv4';
import SongRow from './SongRow/SongRow';
import { useDataLayer } from '../../../../../../context/store';
import * as types from '../../../../../../context/consts/types';

const ViewSongs = () => {
  const [{ selectedPlaylistsTracks }, dispatch] = useDataLayer();

  const handleClick = (e) => {
    const selectedTrack = selectedPlaylistsTracks.find(
      (track) => track.id === e.target.id,
    );

    dispatch({
      type: types.SET_SELECTED_TRACK,
      payload: selectedTrack,
    });
  };

  return (
    <div className="view__songs__container">
      {selectedPlaylistsTracks &&
        selectedPlaylistsTracks.map((tr) => {
          return (
            <SongRow
              key={uuid()}
              id={tr?.id}
              name={tr?.name}
              album={tr?.album?.name}
              artist={tr?.artists?.[0].name}
              imageUrl={tr?.album?.images?.[1].url}
              handleClick={handleClick}
            />
          );
        })}
    </div>
  );
};

export default ViewSongs;
