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
      })
      .catch((err) => {
        console.log(err);
      });

    spotifyApi.getMyCurrentPlayingTrack().then((trackPlaying) => {
      dispatch({
        type: types.SET_CURRENT_PLAYING_TRACK,
        payload: trackPlaying,
      });
    });
  }, []);

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
    console.log(
      '🚀 ~ file: Player.jsx ~ line 49 ~ handlePlayClick ~ currentPlaybackState?.is_playing',
      currentPlaybackState?.is_playing,
    );
  };

  const handleSkipToNext = () => {
    spotifyApi.skipToNext();
  };

  // const handleSkipToPrev = () => {
  //   spotifyApi.skipToPrevious();
  // };

  return (
    <div className="player__container">
      <PlayerDetails />
      <PlayerControls
        handlePlayClick={handlePlayClick}
        handleSkipToNext={handleSkipToNext}
      />
      <VolumeControls />
    </div>
  );
};

export default Player;
