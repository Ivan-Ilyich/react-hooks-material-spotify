/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import SearchIcon from '@material-ui/icons/Search';
import { useDataLayer } from '../../../../../../context/store';
import * as types from '../../../../../../context/consts/types';

const spotifyApi = new SpotifyWebApi();

const SearchBar = () => {
  const [{ selectedPlaylistsTracks }, dispatch] = useDataLayer();
  const [search, setSearch] = useState();

  useEffect(() => {
    spotifyApi.searchTracks(search).then((tracks) => {
      dispatch({
        type: types.SET_SELECTED_PLAYLISTS_TRACKS,
        payload: tracks.tracks.items,
      });
    });
  }, [search]);

  return (
    <div className="header__searchBar__container">
      <SearchIcon />
      <input
        placeholder="Search for Songs"
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
