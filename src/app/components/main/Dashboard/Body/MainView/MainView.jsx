import React, { useEffect } from 'react';
import { useDataLayer } from '../../../../../context/store';
import ViewInfo from './ViewInfo/ViewInfo';
import ViewSongs from './ViewSongs/ViewSongs';
import * as types from '../../../../../context/consts/types';

const MainView = () => {
  const [{ selectedPlaylist, playlists }, dispatch] = useDataLayer();
  console.log(
    '🚀 ~ file: MainView.jsx ~ line 9 ~ MainView ~ selectedPlaylist',
    selectedPlaylist,
  );

  useEffect(() => {
    dispatch({
      type: types.SET_SELECTED_PLAYLIST,
      payload: playlists?.items?.[0] || null,
    });
  }, [playlists]);

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
