/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-empty-pattern */
import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import { getAccessToken } from '../../utils/spotifyAuth';
import { useDataLayer } from '../../context/store';

const spotifyApi = new SpotifyWebApi();

const Main = () => {
  const [{ user, accessToken }, dispatch] = useDataLayer();

  useEffect(() => {
    const hash = getAccessToken();
    const { access_token } = hash;
    if (access_token) {
      dispatch({
        type: 'SET_ACCESS_TOKEN',
        payload: access_token,
      });
    }
    window.location.hash = '';

    if (accessToken) {
      spotifyApi.setAccessToken(accessToken);
      spotifyApi
        .getMe()
        .then((userData) => {
          dispatch({
            type: 'SET_USER',
            payload: userData,
          });
        })
        .catch((err) => {
          console.log(err);
        });
      spotifyApi
        .getUserPlaylists()
        .then((playlists) => {
          console.log(
            '🚀 ~ file: Main.jsx ~ line 41 ~ spotifyApi.getUserPlaylists ~ playlists',
            playlists,
          );
          dispatch({
            type: 'SET_PLAYLIST',
            payload: playlists,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [accessToken]);

  return <div>{!accessToken ? <Login /> : <Dashboard />}</div>;
};

export default Main;
