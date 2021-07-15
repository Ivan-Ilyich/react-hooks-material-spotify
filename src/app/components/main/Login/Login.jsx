import React from 'react';
import { accessUrl } from '../../../utils/spotifyAuth';

const Login = () => (
  <div className="login__container">
    <img
      src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
      alt="Spotify Logo"
      className="spotify-logo"
    />
    <a href={accessUrl} className="login__button">
      Log-In with Spotify
    </a>
  </div>
);

export default Login;
