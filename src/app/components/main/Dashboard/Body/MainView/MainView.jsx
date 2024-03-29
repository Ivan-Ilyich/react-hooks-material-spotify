import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayer } from '../../../../../context/store';
import ViewInfo from './ViewInfo/ViewInfo';
import ViewSongs from './ViewSongs/ViewSongs';
import * as types from '../../../../../context/consts/types';

const spotifyApi = new SpotifyWebApi();

const MainView = () => {
  const [{ selectedPlaylist, playlists }, dispatch] = useDataLayer();

  useEffect(() => {
    if (!selectedPlaylist) {
      dispatch({
        type: types.SET_SELECTED_PLAYLIST,
        payload: playlists?.items?.[0] || null,
      });
    }

    if (!selectedPlaylist) return;
    spotifyApi
      .getPlaylistTracks(selectedPlaylist?.id)
      .then((tracks) => {
        dispatch({
          type: types.SET_SELECTED_PLAYLISTS_TRACKS,
          payload: tracks?.items?.map((item) => item.track),
        });
      })
      .catch((err) => {
        throw Error(err);
      });
  }, [playlists, selectedPlaylist]);

  return (
    <div className="main__view__container">
      <ViewInfo
        descreption={selectedPlaylist?.descreption}
        imageUrl={selectedPlaylist?.images?.[0].url}
        name={selectedPlaylist?.name}
      />
      <ViewSongs />
    </div>
  );
};

export default MainView;
