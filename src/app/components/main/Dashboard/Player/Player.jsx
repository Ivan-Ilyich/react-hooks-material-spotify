/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayer } from '../../../../context/store';
import * as types from '../../../../context/consts/types';

const spotifyApi = new SpotifyWebApi();

const Player = () => {
  const [
    {
      currentPlaybackState,
      currentPlayingTrack,
      shuffle,
      accessToken,
      selectedPlaylistsTracks,
    },
    dispatch,
  ] = useDataLayer();

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

  return <div className="player__container" />;
};

export default Player;
