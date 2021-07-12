// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = 'https://accounts.spotify.com/authorize';

// Replace with your app's client ID, redirect URI and desired scopes
const clientId = '6c7b4840a2754c7599fe1fd09c74c913';
const redirectUri = 'http://localhost:3000/';
const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
];

export const getAccessToken = () => {
  return window.location.hash
    .substring(1)
    .split('$')
    .reduce((init, item) => {
      let parts = item.split('=');
      init[parts[0]] = decodeURIComponent(parts[1]);

      return init;
    }, {});
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20',
)}&response_type=token&show_dialog=true}`;
