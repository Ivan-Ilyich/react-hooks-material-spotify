/* eslint-disable no-useless-return */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayer } from '../../../../context/store';
import * as types from '../../../../context/consts/types';

const spotifyApi = new SpotifyWebApi();
const styles = {
  activeColor: '#fff',
  bgColor: '#333',
  color: '#fff',
  loaderColor: '#fff',
  trackArtistColor: '#ccc',
  trackNameColor: '#fff',
  sliderColor: 'green',
  sliderHandleColor: 'green',

  // activeColor: string;
  // altColor: string;
  // bgColor: string;
  // color: string;
  // errorColor: string;
  // height: number | string;
  // loaderColor: string;
  // loaderSize: number | string;
  // sliderColor: string;
  // sliderHandleBorderRadius: number | string;
  // sliderHandleColor: string;
  // sliderHeight: number;
  // sliderTrackBorderRadius: number | string;
  // sliderTrackColor: string;
  // trackArtistColor: string;
  // trackNameColor: string;
};

const Player = () => {
  const [
    {
      currentPlaybackState,
      currentPlayingTrack,
      shuffle,
      accessToken,
      selectedPlaylistsTracks,
      selectedTrack,
    },
    dispatch,
  ] = useDataLayer();
  console.log(
    '🚀 ~ file: Player.jsx ~ line 50 ~ Player ~ selectedPlaylistsTracks',
    selectedPlaylistsTracks,
  );

  console.log(
    '🚀 ~ file: Player.jsx ~ line 21 ~ Player ~ selectedTrack',
    selectedTrack,
  );

  return (
    <div className="player__container">
      <SpotifyPlayer
        token={accessToken}
        showSaveIcon
        uris={[selectedTrack?.uri] || []}
        autoPlay={false}
        initialVolume={0.5}
        styles={styles}
      />
    </div>
  );
};

export default Player;
