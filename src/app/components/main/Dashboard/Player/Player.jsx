/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import PlayerControls from './PlayerControls/PlayerControls';
import VolumeControls from './VolumeControls/VolumeControls';
import PlayerDetails from './PlayerDetails/PlayerDetails';
import { useDataLayer } from '../../../../context/store';
import * as types from '../../../../context/consts/types';

const spotifyApi = new SpotifyWebApi();

const Player = () => {
  const [{ currentPlaybackState }, dispatch] = useDataLayer();

  useEffect(() => {
    spotifyApi
      .getMyCurrentPlaybackState()
      .then((state) => {
        dispatch({
          type: types.SET_CURRENT_PLAYBACK_STATE,
          payload: state,
        });
        dispatch({
          type: types.SET_CURRENT_PLAYING_TRACK,
          payload: state.item,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSkipFunc = () => {
    spotifyApi
      .getMyCurrentPlaybackState()
      .then((state) => {
        dispatch({
          type: types.SET_CURRENT_PLAYBACK_STATE,
          payload: {
            ...currentPlaybackState,
            is_playing: true,
          },
        });
        dispatch({
          type: types.SET_CURRENT_PLAYING_TRACK,
          payload: state.item,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePlayClick = () => {
    (currentPlaybackState?.is_playing && spotifyApi.pause()) ||
      spotifyApi.play();
    dispatch({
      type: types.SET_CURRENT_PLAYBACK_STATE,
      payload: {
        ...currentPlaybackState,
        is_playing: !currentPlaybackState.is_playing,
      },
    });
  };

  const handleSkipToNext = () => {
    spotifyApi.skipToNext();
    handleSkipFunc();
  };

  const handleSkipToPrev = () => {
    spotifyApi.skipToPrevious();
    handleSkipFunc();
  };

  return (
    <div className="player__container">
      <PlayerDetails />
      <PlayerControls
        handlePlayClick={handlePlayClick}
        handleSkipToNext={handleSkipToNext}
        handleSkipToPrev={handleSkipToPrev}
      />
      <VolumeControls />
    </div>
  );
};

export default Player;
