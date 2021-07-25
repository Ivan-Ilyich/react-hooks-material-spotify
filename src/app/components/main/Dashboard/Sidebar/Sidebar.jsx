/* eslint-disable consistent-return */
import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SidebarOption from './SidebarOption/SidebarOption';
import { useDataLayer } from '../../../../context/store';
import * as types from '../../../../context/consts/types';

const spotifyApi = new SpotifyWebApi();

const Sidebar = () => {
  const [{ playlists, accessToken, topTracks }, dispatch] = useDataLayer();

  useEffect(() => {
    if (!accessToken) return null;

    spotifyApi.getMyTopTracks().then((tracks) => {
      dispatch({
        type: types.SET_TOP_TRACKS,
        payload: tracks?.items,
      });
    });
    return () => null;
  }, []);

  const handlePlaylistClick = (e) => {
    const albumName =
      (!e.target.firstElementChild && e.target.innerHTML) ||
      e.target.firstElementChild.innerHTML;
    const newSelectedPlaylist = playlists.items.filter((playlist) =>
      playlist.name.includes(albumName),
    );

    dispatch({
      type: types.SET_SELECTED_PLAYLIST,
      payload: newSelectedPlaylist[0],
    });
  };

  const handleTopTracksClick = () => {
    if (!topTracks) return null;
    dispatch({
      type: types.SET_SELECTED_PLAYLISTS_TRACKS,
      payload: topTracks,
    });
  };

  return (
    <div className="sidebar__container">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="side bar logo"
        className="sidebar__logo"
      />
      <SidebarOption
        option="Your Top Tracks"
        Icon={LibraryMusicIcon}
        handleClick={handleTopTracksClick}
      />
      <br />
      <strong className="sidebar__title">Playlists</strong>
      <hr />
      {playlists?.items?.map((item) => {
        return (
          <SidebarOption
            option={item.name}
            key={item.name}
            handleClick={handlePlaylistClick}
          />
        );
      })}
    </div>
  );
};

export default Sidebar;
