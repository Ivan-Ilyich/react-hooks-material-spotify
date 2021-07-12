import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Login from './Login/Login';
import { getAccessToken } from '../../utils/spotifyAuth';

const spotifyApi = new SpotifyWebApi();

const Main = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getAccessToken();
    const { access_token } = hash;

    if (access_token) {
      setToken(access_token);
      console.log(
        '🚀 ~ file: Main.jsx ~ line 18 ~ useEffect ~ access_token',
        token,
      );
    }
    window.location.hash = '';

    if (token) {
      console.log('I AM CALLING SPOTIFYWEBAPI');
      spotifyApi.setAccessToken(token);
      spotifyApi.getMe().then((user) => console.log(user));
    }
  }, [token]);

  return (
    <div>
      <Login />
      {token}
    </div>
  );
};

export default Main;
