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
      // setToken(access_token);
      dispatch({
        type: 'SET_ACCESS_TOKEN',
        payload: access_token,
      });
    }
    window.location.hash = '';

    if (accessToken) {
      console.log('I AM CALLING SPOTIFYWEBAPI');
      spotifyApi.setAccessToken(accessToken);
      spotifyApi.getMe().then((userData) => {
        dispatch({
          type: 'SET_USER',
          payload: userData,
        });
      });
    }
  }, [accessToken]);

  console.log(user);
  return <div>{accessToken ? <Dashboard /> : <Login />}</div>;
};

export default Main;
