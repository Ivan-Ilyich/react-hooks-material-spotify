import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
// import { useDispatch } from 'react-redux';
import Login from './Login/Login';
import { getAccessToken } from '../../utils/spotifyAuth';
// import { fetchAccessToken } from '../../redux/actions/accessTokenActions';

const spotifyApi = new SpotifyWebApi();

const Main = () => {
  // const dispatch = useDispatch();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getAccessToken();
    const { access_token } = hash;

    if (access_token) {
      setToken(access_token);
      // console.log(
      //   '🚀 ~ file: Main.jsx ~ line 18 ~ useEffect ~ access_token',
      //   token,
      // );
    }
    window.location.hash = '';

    if (token) {
      // console.log('I AM CALLING SPOTIFYWEBAPI');
      spotifyApi.setAccessToken(token);
      spotifyApi.getMe().then((user) => console.log(user));
    }
  }, [token]);

  // const handleClick = () => {
  //   dispatch(fetchAccessToken());
  // };

  return (
    <div>
      <button type="button">test button</button>
      <Login />
      {token}
    </div>
  );
};

export default Main;
