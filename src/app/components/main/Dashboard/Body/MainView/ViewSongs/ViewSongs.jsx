/* eslint-disable no-unused-expressions */
import React from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { uuid } from 'uuidv4';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow/SongRow';
import { useDataLayer } from '../../../../../../context/store';
import * as types from '../../../../../../context/consts/types';

const spotifyApi = new SpotifyWebApi();

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

    spotifyApi
      .play({
        uris: [`spotify:track:${selectedTrack.id}`],
      })
      .then(() => {
        spotifyApi.getMyCurrentPlaybackState().then((state) => {
          dispatch({
            type: types.SET_CURRENT_PLAYBACK_STATE,
            payload: state,
          });
          dispatch({
            type: types.SET_CURRENT_PLAYING_TRACK,
            payload: state.item,
          });
        });
      })
      .catch((err) => {
        throw Error(err);
      });
  };

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
