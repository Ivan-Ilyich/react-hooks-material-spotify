/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-empty-pattern */
import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import { getAccessToken } from '../../utils/spotifyAuth';
import { useDataLayer } from '../../context/store';
import * as types from '../../context/consts/types';

const spotifyApi = new SpotifyWebApi();

const Main = () => {
  const [{ user, id, accessToken, playlists }, dispatch] = useDataLayer();

  useEffect(() => {
    const hash = getAccessToken();
    const { access_token } = hash;
    window.location.hash = '';

    dispatch({
      type: types.SET_ID,
      payload: user?.id || null,
    });

    if (access_token) {
      spotifyApi.setAccessToken(access_token);

      dispatch({
        type: types.SET_ACCESS_TOKEN,
        payload: access_token,
      });

      spotifyApi
        .getMe()
        .then((userData) => {
          dispatch({
            type: types.SET_USER,
            payload: userData,
          });
        })
        .catch((err) => {
          console.log(err);
        });

      spotifyApi
        .getUserPlaylists()
        .then((userPlaylists) => {
          dispatch({
            type: types.SET_PLAYLISTS,
            payload: userPlaylists,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [accessToken, user, id]);

  return <div>{!accessToken ? <Login /> : <Dashboard />}</div>;
};

export default Main;
