import React, { useEffect, useState } from 'react';
import Login from './Login/Login';
import { getAccessToken } from '../../utils/spotifyAuth';

const Main = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getAccessToken();
    const { access_token } = hash;
    console.log(
      '🚀 ~ file: Main.jsx ~ line 10 ~ useEffect ~ hash',
      access_token,
    );

    if (access_token) {
      setToken(access_token);
      console.log(token);
    }
    window.location.hash = '';
  });

  return (
    <div>
      <Login />
      {token}
    </div>
  );
};

export default Main;
