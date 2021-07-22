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
  const [{ currentPlaybackState, currentPlayingTrack, shuffle }, dispatch] =
    useDataLayer();

  const shuffleStyle = shuffle ? { color: 'green' } : { color: 'white' };

  useEffect(() => {
    spotifyApi
      .getMyCurrentPlaybackState()
      .then((state) => {
        dispatch({
          type: types.SET_CURRENT_PLAYBACK_STATE,
          payload: state,
        });
        console.log('🚀 ~ file: Player.jsx ~ line 28 ~ .then ~ state', state);
      })
      .catch((err) => {
        throw Error(err);
      });
  }, []);

  useEffect(() => {
    spotifyApi
      .getMyCurrentPlayingTrack()
      .then((track) => {
        dispatch({
          type: types.SET_CURRENT_PLAYING_TRACK,
          payload: track.item,
        });
      })
      .catch((err) => {
        throw Error(err);
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
        throw Error(err);
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

  const handleShuffle = () => {
    spotifyApi
      .setShuffle(!shuffle)
      .then(() => {
        dispatch({
          type: types.SET_SHUFFLE,
          payload: !shuffle,
        });
        spotifyApi.getMyCurrentPlaybackState().then((state) => {
          dispatch({
            type: types.SET_CURRENT_PLAYBACK_STATE,
            payload: state,
          });
        });
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  return (
    <div className="player__container">
      <PlayerDetails
        trackTitle={currentPlayingTrack?.name}
        albumTitle={currentPlayingTrack?.album?.name}
        artistTitle={currentPlayingTrack?.album?.artists[0]?.name}
        imageUrl={currentPlayingTrack?.album?.images[0]?.url}
      />
      <PlayerControls
        handlePlayClick={handlePlayClick}
        handleSkipToNext={handleSkipToNext}
        handleSkipToPrev={handleSkipToPrev}
        handleShuffle={handleShuffle}
        shuffleStyle={shuffleStyle}
      />
      <VolumeControls volumeSetting={spotifyApi.setVolume} />
    </div>
  );
};

export default Player;
