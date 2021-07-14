/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-empty-pattern */
import React, { useEffect } from 'react';
import { Container, makeStyles } from '@material-ui/core';
import SpotifyWebApi from 'spotify-web-api-js';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import { getAccessToken } from '../../utils/spotifyAuth';
import { useDataLayer } from '../../context/store';

const useStyles = makeStyles({
  mainContainer: {
    padding: '30px',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});
const spotifyApi = new SpotifyWebApi();

const Main = () => {
  const classes = useStyles();
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
  return (
    <>
      <Container maxWidth="md" className={classes.mainContainer} height="100%">
        {!accessToken ? <Login /> : <Dashboard />}
      </Container>
    </>
  );
};

export default Main;
