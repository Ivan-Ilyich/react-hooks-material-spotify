import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { useDataLayer } from '../../../../../context/store';
import * as types from '../../../../../context/consts/types';

const spotifyApi = new SpotifyWebApi();

const PlayerControls = () => {
  const [{ currentPlaybackState }, dispatch] = useDataLayer();

  useEffect(() => {
    spotifyApi
      .getMyCurrentPlaybackState()
      .then((state) => {
        console.log(
          '🚀 ~ file: PlayerControls.jsx ~ line 17 ~ spotifyApi.getMyCurrentPlaybackState ~ state',
          state,
        );
        dispatch({
          type: types.SET_CURRENT_PLAYBACK_STATE,
          payload: state,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPlaybackState]);

  return (
    <div className="player__controls__container">
      <ShuffleIcon className="player__controls__green" />
      <SkipPreviousIcon className="player__controls__icon" />
      <PlayCircleOutlineIcon className="player__controls__icon" />
      <SkipNextIcon className="player__controls__icon" />
      <RepeatIcon className="player__controls__green" />
    </div>
  );
};

export default PlayerControls;
