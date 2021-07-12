import React from 'react';
import { accessUrl } from '../../../utils/spotifyAuth';

const Login = () => (
  <div>
    <img
      src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
      alt="Spotify Logo"
    />
    <a href={accessUrl}>Log in with Spotify</a>
  </div>
);

export default Login;
