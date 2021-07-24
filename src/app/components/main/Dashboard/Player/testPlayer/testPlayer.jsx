import React from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';

export default function testPlayer({ accessToken, trackUri }) {
  return <SpotifyPlayer token={accessToken} showSaveIcon uri={trackUri} />;
}
